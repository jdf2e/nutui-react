import React, {
  FunctionComponent,
  createContext,
  useContext,
  useMemo,
  CSSProperties,
} from 'react'
import kebabCase from 'lodash.kebabcase'
import { BaseLang } from '@/locales/base'
import zhCN from '@/locales/zh-CN'

export interface ConfigProviderProps {
  locale: BaseLang
  theme?: Record<string, string>

  [key: string]: any
}

const defaultProps = {
  locale: zhCN,
} as ConfigProviderProps

export const defaultConfigRef: {
  current: ConfigProviderProps
} = {
  current: {
    locale: zhCN,
  },
}

export const setDefaultConfig = (config: ConfigProviderProps) => {
  defaultConfigRef.current = config
}

export const getDefaultConfig = () => {
  return defaultConfigRef.current
}

// 创建一个 Context 对象
const ConfigContext = createContext<ConfigProviderProps | null>(null)

export const useConfig = () => {
  return useContext(ConfigContext) ?? getDefaultConfig()
}

function convertThemeVarsToCSSVars(themeVars: Record<string, string | number>) {
  const cssVars: Record<string, string | number> = {}
  Object.keys(themeVars).forEach((key) => {
    cssVars[`--${kebabCase(key)}`] = themeVars[key]
  })
  return cssVars
}

export const ConfigProvider: FunctionComponent<
  Partial<ConfigProviderProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children, ...config } = { ...defaultProps, ...props }
  const parentConfig = useConfig()
  const theme = config.theme || {}
  const style = useMemo<CSSProperties | undefined>(
    () => convertThemeVarsToCSSVars(theme),
    [theme]
  )

  return (
    <ConfigContext.Provider
      value={{
        ...parentConfig,
        ...config,
      }}
    >
      <div style={style}>{children}</div>
    </ConfigContext.Provider>
  )
}

ConfigProvider.defaultProps = defaultProps
ConfigProvider.displayName = 'NutConfigProvider'
