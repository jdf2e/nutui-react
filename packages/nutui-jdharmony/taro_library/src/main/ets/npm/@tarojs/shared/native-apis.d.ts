// @ts-nocheck
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
export interface IApiDiff {
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
export { processApis };
