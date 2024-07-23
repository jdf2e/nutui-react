// @ts-nocheck
import { TaroAny } from "../runtime";
import Taro from "./types";
declare namespace apis {
    // JDAddress 专属方法
    const triggerJDAddress: ({ name, args, complete, fail, success }?: {
        name?: string;
        args?: TaroAny[];
        complete?: (res: TaroAny) => void;
        fail?: (res: TaroAny) => void;
        success?: (res: TaroAny) => void;
    }) => Promise<unknown>;
    // JDBaseInfo 专属方法
    const triggerJDBaseInfo: ({ name, args, complete, fail, success }?: {
        name?: string;
        args?: TaroAny[];
        complete?: (res: TaroAny) => void;
        fail?: (res: TaroAny) => void;
        success?: (res: TaroAny) => void;
    }) => Promise<unknown>;
    // JDRoute 专属方法
    const triggerJDEventCenter: ({ name, args, complete, fail, success }?: {
        name?: string;
        args?: TaroAny[];
        complete?: (res: TaroAny) => void;
        fail?: (res: TaroAny) => void;
        success?: (res: TaroAny) => void;
    }) => Promise<unknown>;
    function sendPvData(params: Record<string, string | number>): void;
    function sendClickData(params: Record<string, string | number>): void;
    function sendExposureData(params: Record<string, string | number>): void;
    function sendSysData(params: Record<string, string | number>): void;
    function sendOrderData(params: Record<string, string | number>): void;
    const triggerJDMtaUtil: ({ name, args, complete, fail, success }?: {
        name?: string;
        args?: TaroAny[];
        complete?: (res: TaroAny) => void;
        fail?: (res: TaroAny) => void;
        success?: (res: TaroAny) => void;
    }) => Promise<unknown>;
    // TODO：增加参数校验
    // const getLocationSchema = {
    //   type: 'String',
    //   altitude: 'Boolean',
    //   ishighAccuracy: 'Boolean',
    //   highAccuracyExpireTime: 'number'
    // }
    const onLocationChange: typeof Taro.onLocationChange;
    const offLocationChange: typeof Taro.offLocationChange;
    const getLocation: typeof Taro.getLocation;
    // JDLocation 专属方法
    const triggerJDLocation: ({ name, args, complete, fail, success }?: {
        name?: string;
        args?: TaroAny[];
        complete?: (res: TaroAny) => void;
        fail?: (res: TaroAny) => void;
        success?: (res: TaroAny) => void;
    }) => Promise<unknown>;
    interface ICallbackResult {
        /** 错误信息 */
        errMsg: string;
    }
    type TFunc = (...args: any[]) => any;
    type TCallback<T = Partial<ICallbackResult>> = (res: T) => Promise<void> | void;
    interface IMethodParam<T = Partial<ICallbackResult>> {
        name: string;
        success?: TCallback<T & ICallbackResult>;
        fail?: TCallback;
        complete?: TCallback<T | ICallbackResult>;
    }
    interface IMockPromise {
        resolve?: typeof Promise.resolve | TFunc;
        reject?: typeof Promise.reject | TFunc;
    }
    class MethodHandler<T = Partial<ICallbackResult>> {
        methodName: string;
        protected __success?: TCallback<T>;
        protected __fail?: TCallback;
        protected __complete?: TCallback<T | ICallbackResult>;
        protected isHandlerError: boolean;
        constructor({ name, success, fail, complete }: IMethodParam<T>);
        success<U = Record<string, unknown>>(res?: Partial<T> & Partial<ICallbackResult>, promise?: IMockPromise): Promise<T & U & ICallbackResult>;
        fail<U = Record<string, unknown>>(res?: Partial<T> & Partial<ICallbackResult>, promise?: IMockPromise): Promise<T & U & ICallbackResult>;
    }
    type TCallbackManagerFunc<T extends unknown[] = unknown[]> = (...arr: T) => void;
    interface ICallbackManagerOption<T extends unknown[] = unknown[]> {
        callback?: TCallbackManagerFunc<T>;
        ctx?: any;
        [key: string]: unknown;
    }
    type TCallbackManagerUnit<T extends unknown[] = unknown[]> = (TCallbackManagerFunc<T> | ICallbackManagerOption<T>);
    class CallbackManager<T extends unknown[] = unknown[]> {
        callbacks: TCallbackManagerUnit<T>[];
        /** 添加回调 */
        add: (opt?: TCallbackManagerUnit<T>) => void;
        /** 移除回调 */
        remove: (opt?: TCallbackManagerUnit<T>) => void;
        /** 获取回调函数数量 */
        count: () => number;
        /** 触发回调 */
        trigger: (...args: T) => void;
    }
    // 位置
    const stopLocationUpdate: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const startLocationUpdateBackground: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const startLocationUpdate: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const openLocation: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onLocationChangeError: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offLocationChangeError: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const choosePoi: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const chooseLocation: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getFuzzyLocation: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // JDMP 专属方法
    const triggerJDMP: ({ name, args, complete, fail, success }?: {
        name?: string;
        args?: TaroAny[];
        complete?: (res: TaroAny) => void;
        fail?: (res: TaroAny) => void;
        success?: (res: TaroAny) => void;
    }) => Promise<unknown>;
    // PermissionManager 专属方法
    const triggerJDPermission: ({ name, args, complete, fail, success }?: {
        name?: string;
        args?: TaroAny[];
        complete?: (res: TaroAny) => void;
        fail?: (res: TaroAny) => void;
        success?: (res: TaroAny) => void;
    }) => Promise<unknown>;
    const onRequestStart: (pageName: string, functionID: string) => void;
    const onRequestFinish: (pageName: string, functionID: string, errCode?: number, errMsg?: string) => void;
    const onPageLoadFinish: (pageName: any) => void;
    const reportFirstScreen: () => void;
    const reportAddRecord: (typeName: string) => void;
    const reportCustomData: (bizData: Record<string, TaroAny>, customData: Record<string, TaroAny>) => void;
    const triggerJDReport: ({ name, args, complete, fail, success }?: {
        name?: string;
        args?: TaroAny[];
        complete?: (res: TaroAny) => void;
        fail?: (res: TaroAny) => void;
        success?: (res: TaroAny) => void;
    }) => Promise<unknown>;
    // JDShare 专属方法
    const triggerJDShare: ({ name, args, complete, fail, success }?: {
        name?: string;
        args?: TaroAny[];
        complete?: (res: TaroAny) => void;
        fail?: (res: TaroAny) => void;
        success?: (res: TaroAny) => void;
    }) => Promise<unknown>;
    const getShareChannelId: (id: string) => Promise<unknown>;
    const getShareChannelIdSE: (id: string) => Promise<unknown>;
    const triggerJDWindowUtil: ({ name, args, complete, fail, success }: {
        name?: string;
        args?: TaroAny[];
        complete?: (res: TaroAny) => void;
        fail?: (res: TaroAny) => void;
        success?: (res: TaroAny) => void;
    }) => Promise<unknown>;
    const previewImage: typeof Taro.previewImage;
    const getImageInfo: typeof Taro.getImageInfo;
    const compressImage: typeof Taro.compressImage;
    const chooseImage: typeof Taro.chooseImage;
    const ETS_METHODS_TRIGGER_EVENTNAME = "__taroPluginEtsMethodsTrigger";
    type GeneralCallback = (res: any) => void;
    type FunctionType = (...args: any) => any;
    interface IAsyncParams<T extends FunctionType = GeneralCallback> {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GeneralCallback;
        /** 接口调用失败的回调函数 */
        fail?: GeneralCallback;
        /** 接口调用成功的回调函数 */
        success?: T;
    }
    type NormalParamSchema = string[];
    type ObjectParamSchema = Record<string, string>;
    type Schema = NormalParamSchema | ObjectParamSchema;
    interface ValidateParams {
        <T>(name: string, params: any, schema: Schema): asserts params is T;
    }
    function shouldBeObject(target: unknown): {
        flag: boolean;
        msg?: undefined;
    } | {
        flag: boolean;
        msg: string;
    };
    interface IParameterErrorParam {
        name?: string;
        para?: string;
        correct?: string;
        wrong?: unknown;
        level?: "warn" | "error" | "log" | "info" | "debug";
    }
    function getParameterError({ name, para, correct, wrong, level }: IParameterErrorParam): string;
    function upperCaseFirstLetter(string: string): string;
    function assertType(target: any, type: string, methodName: string, paramName?: string): void;
    /**
     * 用于校验方法的参数类型
     * @param name 方法名称
     * @param params [array|object] 当前参数
     * @param schema [array|object] 参数类型规范
     * @example
     * ```js
     * // 例子一：
     * validateParams(methodA, [key], [string])
     * // 例子二：
     * validateParams(methodB, { key: 123 }, { key: number })
     * ```
     * @todo 校验可选参数
     */
    const validateParams: ValidateParams;
    function requestPermissions(permissions: string[]): Promise<void>;
    function object2String(obj: any): string;
    function temporarilyNotSupport(name: string, recommended?: string): (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    function permanentlyNotSupport(name?: string): (option?: {}, ...args: any[]) => Promise<ICallbackResult & Record<string, unknown>>;
    /** @deprecated */
    function callCallbackSuccess<T extends FunctionType>(res: any, options?: IAsyncParams<T>): void;
    /** @deprecated */
    function callCallbackFail<T extends FunctionType>(res: any, options?: IAsyncParams<T>): void;
    /** @deprecated */
    function callAsyncSuccess<T extends FunctionType>(resolve: any, res: any, options?: IAsyncParams<T>): void;
    /** @deprecated */
    function callAsyncFail<T extends FunctionType>(reject: any, res: any, options?: IAsyncParams<T>): void;
    const previewImage$0: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const saveImageToPhotosAlbum: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 音频
    const stopVoice: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const setInnerAudioOption: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const playVoice: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const pauseVoice: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getAvailableAudioSources: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const createWebAudioContext: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const createMediaAudioPlayer: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    /**
     * 创建内部 audio 上下文 InnerAudioContext 对象。
     */
    const createInnerAudioContext: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const createAudioContext: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 背景音频
    const stopBackgroundAudio: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const seekBackgroundAudio: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const playBackgroundAudio: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const pauseBackgroundAudio: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onBackgroundAudioStop: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onBackgroundAudioPlay: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onBackgroundAudioPause: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getBackgroundAudioPlayerState: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    /**
     * 获取全局唯一的背景音频管理器
     */
    const getBackgroundAudioManager: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const createCameraContext: typeof Taro.createCameraContext;
    // TODO: 扩展支持预览video
    const previewMedia: typeof Taro.previewMedia;
    const chooseMedia: typeof Taro.chooseMedia;
    // 实时音视频
    const createLivePusherContext: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const createLivePlayerContext: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 地图
    const createMapContext: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 画面录制器
    const createMediaRecorder: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 录音
    const stopRecord: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const startRecord: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getRecorderManager: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const createVideoContext: typeof Taro.createVideoContext;
    // TODO: 1.返回属性补全
    // TODO: 2.只支持从相册选择，补充摄像头拍摄功能，需要HarmonyOS提供选择组件
    const chooseVideo: typeof Taro.chooseVideo;
    const compressVideo: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getVideoInfo: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const openVideoEditor: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const saveVideoToPhotosAlbum: typeof Taro.saveVideoToPhotosAlbum;
    // 视频解码器
    const createVideoDecoder: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 音视频合成
    const createMediaContainer: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 实时语音
    const updateVoIPChatMuteConfig: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const subscribeVoIPVideoMembers: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const setEnable1v1Chat: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onVoIPVideoMembersChanged: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onVoIPChatStateChanged: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onVoIPChatSpeakersChanged: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onVoIPChatMembersChanged: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onVoIPChatInterrupted: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offVoIPChatSpeakersChanged: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offVoIPVideoMembersChanged: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offVoIPChatStateChanged: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offVoIPChatMembersChanged: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offVoIPChatInterrupted: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const joinVoIPChat: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const join1v1Chat: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const exitVoIPChat: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const downloadFile: typeof Taro.uploadFile;
    type TRequest = typeof Taro.request;
    const request: TRequest;
    // JDNetWork 专属方法
    const triggerJDNetWork: ({ name, args, complete, fail, success }?: {
        name?: string;
        args?: TaroAny[];
        complete?: (res: TaroAny) => void;
        fail?: (res: TaroAny) => void;
        success?: (res: TaroAny) => void;
    }) => Promise<unknown>;
    const uploadFile: typeof Taro.uploadFile;
    // mDNS
    const stopLocalServiceDiscovery: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const startLocalServiceDiscovery: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onLocalServiceResolveFail: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onLocalServiceLost: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onLocalServiceFound: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onLocalServiceDiscoveryStop: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offLocalServiceResolveFail: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offLocalServiceLost: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offLocalServiceFound: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offLocalServiceDiscoveryStop: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // TCP 通信
    const createTCPSocket: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // UDP 通信
    const createUDPSocket: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const connectSocket: typeof Taro.connectSocket;
    const pluginLogin: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const login: typeof Taro.login;
    const logout: () => void;
    const triggerJDLogin: ({ name, args, complete, fail, success }?: {
        name?: string;
        args?: TaroAny[];
        complete?: (res: TaroAny) => void;
        fail?: (res: TaroAny) => void;
        success?: (res: TaroAny) => void;
    }) => Promise<unknown>;
    const checkSession: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 帐号信息
    const getAccountInfoSync: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 收货地址
    const chooseAddress: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 授权
    const authorizeForMiniProgram: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const authorize: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 卡券
    const openCard: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const addCard: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 视频号
    const reserveChannelsLive: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const openChannelsUserProfile: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const openChannelsLive: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const openChannelsEvent: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const openChannelsActivity: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getChannelsShareKey: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getChannelsLiveNoticeInfo: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getChannelsLiveInfo: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 微信客服
    const openCustomerServiceChat: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 设备（组）音视频通话
    const requestDeviceVoIP: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getDeviceVoIPList: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 过往接口
    const checkIsSupportFacialRecognition: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const startFacialRecognitionVerify: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const startFacialRecognitionVerifyAndUploadVideo: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const faceVerifyForPay: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 收藏
    const addVideoToFavorites: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const addFileToFavorites: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 微信群
    const getGroupEnterInfo: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 发票
    const chooseInvoiceTitle: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const chooseInvoice: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 车牌
    const chooseLicensePlate: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 我的小程序
    const checkIsAddedToMyMiniProgram: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 隐私信息授权
    const requirePrivacyAuthorize: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const openPrivacyContract: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onNeedPrivacyAuthorization: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getPrivacySetting: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 微信红包
    const showRedPackage: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 设置
    const openSetting: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getSetting: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 生物认证
    const startSoterAuthentication: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const checkIsSupportSoterAuthentication: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const checkIsSoterEnrolledInDevice: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 订阅消息
    const requestSubscribeMessage: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 订阅设备消息
    const requestSubscribeDeviceMessage: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    /**
     * 通过Scope数组获取已登录的对应帐号信息(依赖login行为)
     * @param options
     */
    const getUserInfo: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // export function getUserInfo (options) {
    //   const { success, fail, complete } = options
    //   const res: Record<string, any> = {}
    //   // const result = hmsJSAccount.HuaweiIdAuthManager.getAuthResultWithScopes([hmsJSAccount.PROFILE])
    //   const result = null
    //   if (result) {
    //     res.data = { userInfo: generateUserInfo(result) }
    //     isFunction(success) && success(res)
    //   } else {
    //     res.errorMsg = 'getUserInfo result data is null'
    //     isFunction(fail) && fail(res)
    //   }
    //   isFunction(complete) && complete(res)
    // }
    /**
     * 获取用户信息
     */
    const getUserProfile: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 微信运动
    const shareToWeRun: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getWeRunData: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const navigateTo: typeof Taro.navigateTo;
    const redirectTo: typeof Taro.redirectTo;
    const navigateBack: typeof Taro.navigateBack;
    const reLaunch: typeof Taro.reLaunch;
    const switchTab: typeof Taro.switchTab;
    // JDRoute 专属方法
    const triggerJDRoute: ({ name, args, complete, fail, success }?: {
        name?: string;
        args?: TaroAny[];
        complete?: (res: TaroAny) => void;
        fail?: (res: TaroAny) => void;
        success?: (res: TaroAny) => void;
    }) => Promise<unknown>;
    const canIUse: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const arrayBufferToBase64: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const base64ToArrayBuffer: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 加密
    const getUserCryptoManager: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const setEnableDebug: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getRealtimeLogManager: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getLogManager: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 性能
    const reportPerformance: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getPerformance: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const preloadWebview: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const preloadSkylineView: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const preloadAssets: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    /* 同步版本 */
    const getSystemInfoSync: typeof Taro.getSystemInfoSync;
    /* 异步版本 */
    const getSystemInfo: typeof Taro.getSystemInfo;
    // 更新
    const updateWeChatApp: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getUpdateManager: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 应用级事件
    const onUnhandledRejection: typeof Taro.onUnhandledRejection;
    const onThemeChange: any;
    const onPageNotFound: any;
    const onLazyLoadError: any;
    const onError: typeof Taro.onError;
    const onAudioInterruptionEnd: any;
    const onAudioInterruptionBegin: any;
    const onAppShow: any;
    const onAppHide: any;
    const offUnhandledRejection: typeof Taro.offUnhandledRejection;
    const offThemeChange: any;
    const offPageNotFound: any;
    const offLazyLoadError: any;
    const offError: typeof Taro.offError;
    const offAudioInterruptionEnd: any;
    const offAudioInterruptionBegin: any;
    const offAppShow: any;
    const offAppHide: any;
    // 生命周期
    const getLaunchOptionsSync: typeof Taro.getLaunchOptionsSync;
    const getEnterOptionsSync: typeof Taro.getEnterOptionsSync;
    // 画布
    /** 创建离屏 canvas 实例 */
    const createOffscreenCanvas: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    /** 创建 canvas 的绘图上下文 CanvasContext 对象 */
    // export const createCanvasContext = /* @__PURE__ */ temporarilyNotSupport('createOffscreenCanvas')
    const createCanvasContext: (canvasId: string) => any;
    /** 把当前画布指定区域的内容导出生成指定大小的图片 */
    const canvasToTempFilePath: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    /** 将像素数据绘制到画布 */
    const canvasPutImageData: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    /** 获取 canvas 区域隐含的像素数据 */
    const canvasGetImageData: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const reportMonitor: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const reportAnalytics: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const reportEvent: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getExptInfoSync: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    /**
     * 停止监听加速度数据。
     */
    const stopAccelerometer: typeof Taro.stopAccelerometer;
    /**
     * 开始监听加速度数据。
     */
    const startAccelerometer: typeof Taro.startAccelerometer;
    /**
     * 监听加速度数据事件。频率根据 Taro.startAccelerometer() 的 interval 参数。可使用 Taro.stopAccelerometer() 停止监听。
     */
    const onAccelerometerChange: typeof Taro.onAccelerometerChange;
    /**
     * 取消监听加速度数据事件，参数为空，则取消所有的事件监听
     */
    const offAccelerometerChange: typeof Taro.offAccelerometerChange;
    // 无障碍
    const checkIsOpenAccessibility: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 电量
    const getBatteryInfoSync: typeof Taro.getBatteryInfoSync;
    const getBatteryInfo: typeof Taro.getBatteryInfo;
    // 蓝牙-通用
    const stopBluetoothDevicesDiscovery: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const startBluetoothDevicesDiscovery: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const openBluetoothAdapter: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onBluetoothDeviceFound: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onBluetoothAdapterStateChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offBluetoothDeviceFound: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offBluetoothAdapterStateChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const makeBluetoothPair: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const isBluetoothDevicePaired: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getConnectedBluetoothDevices: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getBluetoothDevices: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getBluetoothAdapterState: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const closeBluetoothAdapter: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 蓝牙-低功耗中心设备
    const writeBLECharacteristicValue: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const setBLEMTU: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const readBLECharacteristicValue: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onBLEMTUChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onBLEConnectionStateChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onBLECharacteristicValueChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offBLEMTUChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offBLEConnectionStateChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offBLECharacteristicValueChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const notifyBLECharacteristicValueChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getBLEMTU: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getBLEDeviceServices: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getBLEDeviceRSSI: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getBLEDeviceCharacteristics: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const createBLEConnection: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const closeBLEConnection: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 蓝牙-低功耗外围设备
    const onBLEPeripheralConnectionStateChanged: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offBLEPeripheralConnectionStateChanged: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const createBLEPeripheralServer: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 日历
    const addPhoneRepeatCalendar: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const addPhoneCalendar: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    /**
     * 设置系统剪贴板的内容
     */
    const setClipboardData: typeof Taro.setClipboardData;
    /**
     * 获取系统剪贴板的内容
     */
    const getClipboardData: typeof Taro.getClipboardData;
    /**
     * 停止监听罗盘数据
     */
    const stopCompass: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    /**
     * 开始监听罗盘数据
     */
    const startCompass: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    /**
     * 监听罗盘数据变化事件。频率：5 次/秒，接口调用后会自动开始监听，可使用 wx.stopCompass 停止监听。
     */
    const onCompassChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    /**
     * 取消监听罗盘数据变化事件，参数为空，则取消所有的事件监听。
     */
    const offCompassChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 联系人
    const chooseContact: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const addPhoneContact: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 加密
    const getRandomValues: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 陀螺仪
    const stopGyroscope: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const startGyroscope: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onGyroscopeChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offGyroscopeChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 蓝牙-信标(Beacon)
    const stopBeaconDiscovery: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const startBeaconDiscovery: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onBeaconUpdate: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onBeaconServiceChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offBeaconUpdate: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offBeaconServiceChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getBeacons: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onKeyboardHeightChange: typeof Taro.onKeyboardHeightChange;
    const offKeyboardHeightChange: typeof Taro.offKeyboardHeightChange;
    const hideKeyboard: typeof Taro.hideKeyboard;
    const getSelectedTextRange: any;
    const onMemoryWarning: (listener: any) => void;
    const offMemoryWarning: (listener: any) => void;
    const stopDeviceMotionListening: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const startDeviceMotionListening: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onDeviceMotionChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offDeviceMotionChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getNetworkType: typeof Taro.getNetworkType;
    /**
     * 在最近的八次网络请求中, 出现下列三个现象之一则判定弱网。
     * - 出现三次以上连接超时
     * - 出现三次 rtt 超过 400
     * - 出现三次以上的丢包
     * > 弱网事件通知规则是: 弱网状态变化时立即通知, 状态不变时 30s 内最多通知一次。
     */
    const onNetworkWeakChange: any;
    const onNetworkStatusChange: typeof Taro.onNetworkStatusChange;
    const offNetworkWeakChange: any;
    const offNetworkStatusChange: typeof Taro.offNetworkStatusChange;
    const getLocalIPAddress: any;
    // NFC
    const stopHCE: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const startHCE: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const sendHCEMessage: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onHCEMessage: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offHCEMessage: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getNFCAdapter: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getHCEState: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const makePhoneCall: typeof Taro.makePhoneCall;
    // 扫码
    const scanCode: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 屏幕
    const setVisualEffectOnCapture: any;
    const setScreenBrightness: typeof Taro.setScreenBrightness;
    const setKeepScreenOn: any;
    const onUserCaptureScreen: any;
    const offUserCaptureScreen: any;
    const getScreenBrightness: typeof Taro.getScreenBrightness;
    const onScreenRecordingStateChanged: any;
    const offScreenRecordingStateChanged: any;
    const getScreenRecordingState: any;
    // 短信
    const sendSms: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const vibrateLong: ({ success, fail, complete }?: Taro.vibrateLong.Option) => Promise<unknown>;
    const vibrateShort: ({ success, fail, complete }?: Taro.vibrateLong.Option) => Promise<unknown>;
    // Wi-Fi
    const stopWifi: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const startWifi: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const setWifiList: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onWifiConnectedWithPartialInfo: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onWifiConnected: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onGetWifiList: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offWifiConnectedWithPartialInfo: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offWifiConnected: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const offGetWifiList: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getWifiList: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getConnectedWifi: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const connectWifi: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 第三方平台
    const getExtConfigSync: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getExtConfig: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    function validateSavedFilePath(savedFilePath: string): void;
    function getFileSystemManager(): Taro.FileSystemManager;
    const saveFileToDisk: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    /**
     * HarmonyOS 不支持 showMenu 选项，并且 type 目前仅支持 *，详情参见：
     * https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-document-0000001168936589#section9616125953711
     */
    function openDocument(option: Taro.openDocument.Option): Promise<any>;
    function saveFile(option: Taro.saveFile.Option): Promise<any>;
    function removeSavedFile(option: Taro.removeSavedFile.Option): Promise<any>;
    function getFileInfo(option: Taro.getFileInfo.Option): Promise<Taro.getFileInfo.SuccessCallbackResult | Taro.getFileInfo.FailCallbackResult>;
    function getSavedFileList(option?: Taro.getSavedFileList.Option): Promise<Taro.getSavedFileList.SuccessCallbackResult>;
    function getSavedFileInfo(option: Taro.getSavedFileInfo.Option): Promise<Taro.getSavedFileInfo.SuccessCallbackResult>;
    const ENV_TYPE: {
        WEAPP: string;
        SWAN: string;
        ALIPAY: string;
        TT: string;
        QQ: string;
        JD: string;
        WEB: string;
        RN: string;
        HARMONY: string;
        QUICKAPP: string;
    };
    function getEnv(): string;
    // TODO
    const getCurrentPages: () => never[];
    const requirePlugin: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 跳转
    const openEmbeddedMiniProgram: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const navigateToMiniProgram: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const navigateBackMiniProgram: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const exitMiniProgram: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const openBusinessView: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 支付
    const requestPayment: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const requestPluginPayment: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const requestOrderPayment: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 转发
    /** 更新转发属性 */
    const updateShareMenu: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    /** 显示当前页面的转发按钮 */
    const showShareMenu: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    /** 打开分享图片弹窗，可以将图片发送给朋友、收藏或下载 */
    const showShareImageMenu: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    /** 转发视频到聊天 */
    const shareVideoMessage: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    /** 转发文件到聊天 */
    const shareFileMessage: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    /** 监听用户点击右上角菜单的「复制链接」按钮时触发的事件 */
    const onCopyUrl: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    /** 移除用户点击右上角菜单的「复制链接」按钮时触发的事件的监听函数 */
    const offCopyUrl: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    /** 隐藏当前页面的转发按钮 */
    const hideShareMenu: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    /** 获取转发详细信息 */
    const getShareInfo: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    /** 验证私密消息。 */
    const authPrivateMessage: (option?: {}, ...args: any[]) => Promise<ICallbackResult & Record<string, unknown>>;
    function getStorage<T = any>(options: Taro.getStorage.Option<T>): Promise<unknown> | undefined;
    function setStorage(options: Taro.setStorage.Option): Promise<unknown> | undefined;
    function removeStorage(options: Taro.removeStorage.Option): Promise<unknown> | undefined;
    const getStorageInfoSync: any;
    const getStorageInfo: any;
    const createBufferURL: any;
    const revokeBufferURL: any;
    const batchSetStorageSync: any;
    const batchSetStorage: any;
    const batchGetStorageSync: any;
    const batchGetStorage: any;
    const clearStorage: any;
    const getStorageSync: any;
    const setStorageSync: any;
    const clearStorageSync: any;
    const removeStorageSync: any;
    // 周期性更新
    const setBackgroundFetchToken: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const onBackgroundFetchData: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getBackgroundFetchToken: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const getBackgroundFetchData: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 周期性更新
    const createCacheManager: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    interface IAnimationAttr {
        duration: number;
        delay: number;
        timingFunction: string;
        transformOrigin: string;
    }
    type TStep = {
        delay: number;
        duration: number;
        timingFunction: string;
        transformOrigin: string;
        rule: TRule;
    };
    type TRule = Record<string, any>;
    class Animation implements Taro.Animation {
        unit: string;
        DEFAULT: IAnimationAttr;
        // 组合动画
        steps: TStep[];
        // 属性组合
        rule: TRule;
        constructor({ duration, delay, timingFunction, transformOrigin, unit }?: Taro.createAnimation.Option);
        // 设置默认值
        setDefault(duration: any, delay: any, timingFunction: any, transformOrigin: any): void;
        export(): {
            actions: any[];
        };
        step(arg?: Partial<IAnimationAttr>): Taro.Animation;
        matrix(a: number, b: number, c: number, d: number, tx: number, ty: number): Taro.Animation;
        matrix3d(a1: number, b1: number, c1: number, d1: number, a2: number, b2: number, c2: number, d2: number, a3: number, b3: number, c3: number, d3: number, a4: number, b4: number, c4: number, d4: number): Taro.Animation;
        rotate(angle: number): Taro.Animation;
        rotate3d(x: number, y?: number | undefined, z?: number | undefined, angle?: number | undefined): Taro.Animation;
        rotateX(angle: number): Taro.Animation;
        rotateY(angle: number): Taro.Animation;
        rotateZ(angle: number): Taro.Animation;
        scale(sx: number, sy?: number | undefined): Taro.Animation;
        scale3d(sx: number, sy: number, sz: number): Taro.Animation;
        scaleX(scale: number): Taro.Animation;
        scaleY(scale: number): Taro.Animation;
        scaleZ(scale: number): Taro.Animation;
        skew(ax: number, ay: number): Taro.Animation;
        skewX(angle: number): Taro.Animation;
        skewY(angle: number): Taro.Animation;
        translate(tx?: number | undefined, ty?: number | undefined): Taro.Animation;
        translate3d(tx?: number | undefined, ty?: number | undefined, tz?: number | undefined): Taro.Animation;
        translateX(translation: number): Taro.Animation;
        translateY(translation: number): Taro.Animation;
        translateZ(translation: number): Taro.Animation;
        opacity(value: number): Taro.Animation;
        backgroundColor(value: string): Taro.Animation;
        width(value: string | number): Taro.Animation;
        height(value: string | number): Taro.Animation;
        left(value: string | number): Taro.Animation;
        right(value: string | number): Taro.Animation;
        top(value: string | number): Taro.Animation;
        bottom(value: string | number): Taro.Animation;
    }
    const createAnimation: (option: Taro.createAnimation.Option) => Animation;
    const setBackgroundTextStyle: any;
    function setBackgroundColor(options: Taro.setBackgroundColor.Option): Promise<unknown>;
    // 自定义组件
    const nextTick: typeof Taro.nextTick;
    // 字体
    const loadFontFace: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    function showToast(options: any): Promise<unknown>;
    function showModal(options: any): Promise<unknown>;
    function showActionSheet(options: any): Promise<unknown>;
    const hideToast: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const showLoading: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const hideLoading: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const enableAlertBeforeUnload: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const disableAlertBeforeUnload: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // 菜单
    const getMenuButtonBoundingClientRect: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const setNavigationBarTitle: typeof Taro.setNavigationBarTitle;
    const setNavigationBarColor: typeof Taro.setNavigationBarColor;
    const showNavigationBarLoading: typeof Taro.setNavigationBarColor;
    const hideNavigationBarLoading: typeof Taro.hideNavigationBarLoading;
    const hideHomeButton: typeof Taro.hideHomeButton;
    const startPullDownRefresh: typeof Taro.startPullDownRefresh;
    const stopPullDownRefresh: typeof Taro.stopPullDownRefresh;
    /**
     * 将页面滚动到目标位置
     */
    const pageScrollTo: typeof Taro.pageScrollTo;
    // 置顶
    const setTopBarText: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    const showTabBar: {
        (option?: Taro.showTabBar.Option | undefined): Promise<TaroGeneral.CallbackResult>;
        (option?: Taro.showTabBar.Option | undefined): Promise<TaroGeneral.CallbackResult>;
    };
    const hideTabBar: {
        (option?: Taro.hideTabBar.Option | undefined): Promise<TaroGeneral.CallbackResult>;
        (option?: Taro.hideTabBar.Option | undefined): Promise<TaroGeneral.CallbackResult>;
    };
    const setTabBarStyle: typeof Taro.setTabBarStyle;
    const setTabBarItem: typeof Taro.setTabBarItem;
    function showTabBarRedDot(options: any): Promise<unknown>;
    function hideTabBarRedDot(options: any): Promise<unknown>;
    function setTabBarBadge(options: any): Promise<unknown>;
    function removeTabBarBadge(options: any): Promise<unknown>;
    /**
     * 设置窗口大小，该接口仅适用于 PC 平台，使用细则请参见指南
     */
    const setWindowSize: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    /**
     * 监听窗口尺寸变化事件
     */
    const onWindowResize: typeof Taro.onWindowResize;
    /**
     * 取消监听窗口尺寸变化事件
     */
    const offWindowResize: typeof Taro.offWindowResize;
    const checkIsPictureInPictureActive: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    // Worker
    const createWorker: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    class IntersectionObserver implements Taro.IntersectionObserver {
        // 自定义组件实例
        private _component;
        // 监听的nodes
        private _observerNodes;
        // 选项
        private _options;
        constructor(component: any, options?: Taro.createIntersectionObserver.Option);
        disconnect(): void;
        observe(targetSelector: string, callback: Taro.IntersectionObserver.ObserveCallback): void;
        relativeTo(): Taro.IntersectionObserver;
        relativeToViewport(): Taro.IntersectionObserver;
        // @ts-ignore
        private handleResult;
    }
    class NodesRef implements Taro.NodesRef {
        _component?: any;
        _selector: string;
        _selectorQuery: SelectorQuery;
        _single: boolean;
        constructor(selector: string, querySelectorQuery: SelectorQuery, single: boolean);
        context(cb: any): SelectorQuery;
        node(cb?: Taro.NodesRef.NodeCallback): SelectorQuery;
        boundingClientRect(cb?: Taro.NodesRef.BoundingClientRectCallback): SelectorQuery;
        scrollOffset(cb: any): SelectorQuery;
        fields(fields: Taro.NodesRef.Fields, cb?: Taro.NodesRef.FieldsCallback): SelectorQuery;
    }
    interface ISelectorQueryQueue {
        component: any;
        selector: string;
        single: boolean;
        fields: any;
    }
    type TSelectorQueryQueueCallback = (res: ISelectorQueryQueue) => void;
    class SelectorQuery implements Taro.SelectorQuery {
        _queue: ISelectorQueryQueue[];
        _queueCb: (TSelectorQueryQueueCallback | null)[];
        _component?: any;
        constructor();
        /**
         * 设置选择器的选取范围
         * @param component 指定组件
         * @return selectQuery 返回查询对象
         */
        in: (_: any) => this;
        /**
         * 在当前页面下选择第一个匹配选择器selector的节点
         * @param selector
         * @return nodesRef 返回一个NodesRef 对象实例，可以用于获取节点信息
         */
        select(selector: string): NodesRef;
        /**
         * 在当前页面下选择匹配选择器selector的所有节点
         * @param selector
         */
        selectAll(selector: string): NodesRef;
        /**
         * 选择显示区域。可用于获取显示区域的尺寸、滚动位置等信息
         */
        selectViewport(): NodesRef;
        exec(cb?: (...args: any[]) => any): any;
        _push(selector: any, component: any, single: any, fields: any, callback?: Taro.NodesRef.FieldsCallback | null): void;
    }
    const createSelectorQuery: () => SelectorQuery;
    const createIntersectionObserver: typeof Taro.createIntersectionObserver;
    const createMediaQueryObserver: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
    export { Current, getCurrentInstance } from "../runtime";
    export { eventCenter, Events, History } from "../runtime/dist/runtime.esm";
}
declare namespace cacheApis {
    interface copyOption {
        page?: TaroAny;
        limit?: {
            id?: {
                [selector: string]: number;
            };
            class?: {
                [selector: string]: number;
            };
        };
    }
    function getPageCache(context: any): void;
    function setPageCache(option?: copyOption): void;
    function clearPageCache(pageList?: string[]): void;
    /**
     * 切换页面到真实的 node 节点，即 diff TaroTree 的入口
     */
    function switchPageCacheToPageNode(pageComponent: TaroAny): void;
}
declare namespace taskpoolApis {
    // TaskPool 专属方法
    const triggerTaskPoolMethods: ({ name, args, complete, fail, success }?: {
        name?: string;
        args?: TaroAny[];
        complete?: (res: TaroAny) => void;
        fail?: (res: TaroAny) => void;
        success?: (res: TaroAny) => void;
    }) => Promise<unknown>;
}
declare const taro: typeof apis & typeof cacheApis & typeof taskpoolApis;
declare function initNativeApi(taro: any): void;
declare function getApp(): import("@tarojs/runtime").AppInstance;
declare function initPxTransform({ designWidth, deviceRatio, baseFontSize, unitPrecision, targetUnit }: {
    designWidth?: number | undefined;
    deviceRatio?: Record<string | number, number> | undefined;
    baseFontSize?: number | undefined;
    unitPrecision?: number | undefined;
    targetUnit?: string | undefined;
}): void;
declare function pxTransformHelper(size: number, unit: string | undefined, isNumber: boolean | undefined, radix: number): number | string;
declare function pxTransform(size: number, radix: number): number | string;
declare function canIUseWebp(): boolean;
declare function getAppInfo(): {
    platform: string;
    taroVersion: string;
    designWidth: any;
};
declare function getUIContext(): any;
export { taro as default, initNativeApi, getApp, initPxTransform, pxTransformHelper, pxTransform, canIUseWebp, getAppInfo, getUIContext, triggerJDAddress, triggerJDBaseInfo, triggerJDEventCenter, sendPvData, sendClickData, sendExposureData, sendSysData, sendOrderData, triggerJDMtaUtil, onLocationChange, offLocationChange, getLocation, triggerJDLocation, stopLocationUpdate, startLocationUpdateBackground, startLocationUpdate, openLocation, onLocationChangeError, offLocationChangeError, choosePoi, chooseLocation, getFuzzyLocation, triggerJDMP, triggerJDPermission, onRequestStart, onRequestFinish, onPageLoadFinish, reportFirstScreen, reportAddRecord, reportCustomData, triggerJDReport, triggerJDShare, getShareChannelId, getShareChannelIdSE, triggerJDWindowUtil, previewImage, chooseImage, compressImage, getImageInfo, saveImageToPhotosAlbum, stopVoice, setInnerAudioOption, playVoice, pauseVoice, getAvailableAudioSources, createWebAudioContext, createMediaAudioPlayer, createInnerAudioContext, createAudioContext, stopBackgroundAudio, seekBackgroundAudio, playBackgroundAudio, pauseBackgroundAudio, onBackgroundAudioStop, onBackgroundAudioPlay, onBackgroundAudioPause, getBackgroundAudioPlayerState, getBackgroundAudioManager, createCameraContext, previewMedia, chooseMedia, createLivePusherContext, createLivePlayerContext, createMapContext, createMediaRecorder, stopRecord, startRecord, getRecorderManager, createVideoContext, chooseVideo, compressVideo, getVideoInfo, openVideoEditor, saveVideoToPhotosAlbum, createVideoDecoder, createMediaContainer, updateVoIPChatMuteConfig, subscribeVoIPVideoMembers, setEnable1v1Chat, onVoIPVideoMembersChanged, onVoIPChatStateChanged, onVoIPChatSpeakersChanged, onVoIPChatMembersChanged, onVoIPChatInterrupted, offVoIPChatSpeakersChanged, offVoIPVideoMembersChanged, offVoIPChatStateChanged, offVoIPChatMembersChanged, offVoIPChatInterrupted, joinVoIPChat, join1v1Chat, exitVoIPChat, downloadFile, request, triggerJDNetWork, uploadFile, stopLocalServiceDiscovery, startLocalServiceDiscovery, onLocalServiceResolveFail, onLocalServiceLost, onLocalServiceFound, onLocalServiceDiscoveryStop, offLocalServiceResolveFail, offLocalServiceLost, offLocalServiceFound, offLocalServiceDiscoveryStop, createTCPSocket, createUDPSocket, connectSocket, pluginLogin, login, logout, triggerJDLogin, checkSession, getAccountInfoSync, chooseAddress, authorizeForMiniProgram, authorize, openCard, addCard, reserveChannelsLive, openChannelsUserProfile, openChannelsLive, openChannelsEvent, openChannelsActivity, getChannelsShareKey, getChannelsLiveNoticeInfo, getChannelsLiveInfo, openCustomerServiceChat, requestDeviceVoIP, getDeviceVoIPList, checkIsSupportFacialRecognition, startFacialRecognitionVerify, startFacialRecognitionVerifyAndUploadVideo, faceVerifyForPay, addVideoToFavorites, addFileToFavorites, getGroupEnterInfo, chooseInvoiceTitle, chooseInvoice, chooseLicensePlate, checkIsAddedToMyMiniProgram, requirePrivacyAuthorize, openPrivacyContract, onNeedPrivacyAuthorization, getPrivacySetting, showRedPackage, openSetting, getSetting, startSoterAuthentication, checkIsSupportSoterAuthentication, checkIsSoterEnrolledInDevice, requestSubscribeMessage, requestSubscribeDeviceMessage, getUserInfo, getUserProfile, shareToWeRun, getWeRunData, navigateTo, redirectTo, navigateBack, reLaunch, switchTab, triggerJDRoute, canIUse, arrayBufferToBase64, base64ToArrayBuffer, getUserCryptoManager, setEnableDebug, getRealtimeLogManager, getLogManager, reportPerformance, getPerformance, preloadWebview, preloadSkylineView, preloadAssets, getSystemInfoSync, getSystemInfo, updateWeChatApp, getUpdateManager, onUnhandledRejection, onThemeChange, onPageNotFound, onLazyLoadError, onError, onAudioInterruptionEnd, onAudioInterruptionBegin, onAppShow, onAppHide, offUnhandledRejection, offThemeChange, offPageNotFound, offLazyLoadError, offError, offAudioInterruptionEnd, offAudioInterruptionBegin, offAppShow, offAppHide, getLaunchOptionsSync, getEnterOptionsSync, createOffscreenCanvas, createCanvasContext, canvasToTempFilePath, canvasPutImageData, canvasGetImageData, reportMonitor, reportAnalytics, reportEvent, getExptInfoSync, stopAccelerometer, startAccelerometer, onAccelerometerChange, offAccelerometerChange, checkIsOpenAccessibility, getBatteryInfoSync, getBatteryInfo, stopBluetoothDevicesDiscovery, startBluetoothDevicesDiscovery, openBluetoothAdapter, onBluetoothDeviceFound, onBluetoothAdapterStateChange, offBluetoothDeviceFound, offBluetoothAdapterStateChange, makeBluetoothPair, isBluetoothDevicePaired, getConnectedBluetoothDevices, getBluetoothDevices, getBluetoothAdapterState, closeBluetoothAdapter, writeBLECharacteristicValue, setBLEMTU, readBLECharacteristicValue, onBLEMTUChange, onBLEConnectionStateChange, onBLECharacteristicValueChange, offBLEMTUChange, offBLEConnectionStateChange, offBLECharacteristicValueChange, notifyBLECharacteristicValueChange, getBLEMTU, getBLEDeviceServices, getBLEDeviceRSSI, getBLEDeviceCharacteristics, createBLEConnection, closeBLEConnection, onBLEPeripheralConnectionStateChanged, offBLEPeripheralConnectionStateChanged, createBLEPeripheralServer, addPhoneRepeatCalendar, addPhoneCalendar, setClipboardData, getClipboardData, stopCompass, startCompass, onCompassChange, offCompassChange, chooseContact, addPhoneContact, getRandomValues, stopGyroscope, startGyroscope, onGyroscopeChange, offGyroscopeChange, stopBeaconDiscovery, startBeaconDiscovery, onBeaconUpdate, onBeaconServiceChange, offBeaconUpdate, offBeaconServiceChange, getBeacons, onKeyboardHeightChange, offKeyboardHeightChange, hideKeyboard, getSelectedTextRange, onMemoryWarning, offMemoryWarning, stopDeviceMotionListening, startDeviceMotionListening, onDeviceMotionChange, offDeviceMotionChange, getNetworkType, onNetworkWeakChange, onNetworkStatusChange, offNetworkWeakChange, offNetworkStatusChange, getLocalIPAddress, stopHCE, startHCE, sendHCEMessage, onHCEMessage, offHCEMessage, getNFCAdapter, getHCEState, makePhoneCall, scanCode, setVisualEffectOnCapture, setScreenBrightness, setKeepScreenOn, onUserCaptureScreen, offUserCaptureScreen, getScreenBrightness, onScreenRecordingStateChanged, offScreenRecordingStateChanged, getScreenRecordingState, sendSms, vibrateLong, vibrateShort, stopWifi, startWifi, setWifiList, onWifiConnectedWithPartialInfo, onWifiConnected, onGetWifiList, offWifiConnectedWithPartialInfo, offWifiConnected, offGetWifiList, getWifiList, getConnectedWifi, connectWifi, getExtConfigSync, getExtConfig, saveFileToDisk, openDocument, saveFile, removeSavedFile, getFileInfo, getSavedFileList, getSavedFileInfo, getFileSystemManager, ENV_TYPE, getEnv, getCurrentPages, requirePlugin, openEmbeddedMiniProgram, navigateToMiniProgram, navigateBackMiniProgram, exitMiniProgram, openBusinessView, requestPayment, requestPluginPayment, requestOrderPayment, updateShareMenu, showShareMenu, showShareImageMenu, shareVideoMessage, shareFileMessage, onCopyUrl, offCopyUrl, hideShareMenu, getShareInfo, authPrivateMessage, getStorage, setStorage, removeStorage, getStorageInfoSync, getStorageInfo, createBufferURL, revokeBufferURL, batchSetStorageSync, batchSetStorage, batchGetStorageSync, batchGetStorage, clearStorage, getStorageSync, setStorageSync, clearStorageSync, removeStorageSync, setBackgroundFetchToken, onBackgroundFetchData, getBackgroundFetchToken, getBackgroundFetchData, createCacheManager, createAnimation, setBackgroundTextStyle, setBackgroundColor, nextTick, loadFontFace, showToast, showModal, showActionSheet, hideToast, showLoading, hideLoading, enableAlertBeforeUnload, disableAlertBeforeUnload, getMenuButtonBoundingClientRect, setNavigationBarTitle, setNavigationBarColor, showNavigationBarLoading, hideNavigationBarLoading, hideHomeButton, startPullDownRefresh, stopPullDownRefresh, pageScrollTo, setTopBarText, showTabBar, hideTabBar, setTabBarStyle, setTabBarItem, showTabBarRedDot, hideTabBarRedDot, setTabBarBadge, removeTabBarBadge, setWindowSize, onWindowResize, offWindowResize, checkIsPictureInPictureActive, createWorker, createSelectorQuery, createIntersectionObserver, createMediaQueryObserver, IntersectionObserver, getPageCache, setPageCache, clearPageCache, switchPageCacheToPageNode, triggerTaskPoolMethods };
export { Current, getCurrentInstance } from "../runtime";
export { eventCenter, Events, History } from "../runtime/dist/runtime.esm";
