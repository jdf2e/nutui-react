import {
  ConfigProvider,
  useConfig,
  setDefaultConfig,
  getDefaultConfig,
} from './configprovider'

export type { ConfigProviderProps, Direction } from './configprovider'
export type { NutCSSVariables } from './types'
export { useConfig, setDefaultConfig, getDefaultConfig }
export default ConfigProvider
