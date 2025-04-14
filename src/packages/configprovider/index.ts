import {
  ConfigProvider,
  useConfig,
  setDefaultConfig,
  getDefaultConfig,
  useRtl,
} from './configprovider'

export type {
  WebConfigProviderProps,
  PageDirection as ConfigProviderDirection,
} from '@/types'
export type { NutCSSVariables } from './types'
export { useConfig, setDefaultConfig, getDefaultConfig, useRtl }
export default ConfigProvider
