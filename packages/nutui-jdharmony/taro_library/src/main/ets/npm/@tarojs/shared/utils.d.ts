// @ts-nocheck
import { internalComponents } from './components';
import { PLATFORM_TYPE } from './constants';
export declare const EMPTY_OBJ: any;
export declare const EMPTY_ARR: never[];
export declare const noop: (..._: unknown[]) => void;
/**
 * Boxed value.
 *
 * @typeparam T Value type.
 */
export interface Box<T> {
    v: T;
}
/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param v Value.
 * @returns Boxed value.
 */
export declare const box: <T>(v: T) => {
    v: T;
};
/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param b Boxed value.
 * @returns Value.
 */
export declare const unbox: <T>(b: Box<T>) => T;
export declare function toDashed(s: string): string;
export declare function toCamelCase(s: string): string;
export declare const toKebabCase: (string: any) => any;
export declare function capitalize(s: string): string;
export declare const hasOwn: (val: Record<any, any>, key: string | symbol) => any;
/**
 * ensure takes a condition and throw a error if the condition fails,
 * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
 * @param condition condition.
 * @param msg error message.
 */
export declare function ensure(condition: boolean, msg: string): asserts condition;
export declare function warn(condition: boolean, msg: string): void;
export declare function queryToJson(str: any): {};
export declare function getUniqueKey(): string;
export declare function cacheDataSet(key: any, val: any): void;
export declare function cacheDataGet(key: any, delelteAfterGet?: any): any;
export declare function cacheDataHas(key: any): boolean;
export declare function mergeInternalComponents(components: any): Record<string, Record<string, string>>;
export declare function getComponentsAlias(origin: typeof internalComponents): {};
export declare function getPlatformType(platform?: string, configNameOrType?: string): PLATFORM_TYPE;
export declare function mergeReconciler(hostConfig: any, hooksForTest?: any): void;
export declare function nonsupport(api: any): () => void;
export declare function setUniqueKeyToRoute(key: string, obj: any): void;
export declare function indent(str: string, size: number): string;
