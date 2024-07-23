/// <reference path="global.d.ts" />

/// <reference path="taro.api.d.ts" />
/// <reference path="taro.component.d.ts" />
/// <reference path="taro.config.d.ts" />
/// <reference path="taro.lifecycle.d.ts" />

export = Taro
export as namespace Taro

declare const Taro: Taro.TaroStatic

declare namespace Taro {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TaroStatic {}
}
declare global {
  const defineAppConfig: (config: Taro.Config) => Taro.Config
  const definePageConfig: (config: Taro.Config) => Taro.Config
}