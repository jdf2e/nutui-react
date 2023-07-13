import React, {
  FunctionComponent,
  createContext,
  useContext,
  CSSProperties,
} from 'react'
import classNames from 'classnames'
import kebabCase from 'lodash.kebabcase'
import { BaseLang } from '@/locales/base'
import zhCN from '@/locales/zh-CN'
import type { NutCSSVariables } from './types'

export interface ConfigProviderProps {
  locale: BaseLang
  theme?: Record<string | NutCSSVariables, string>
  className?: string
  style?: CSSProperties
  [key: string]: any
}

const defaultProps = {
  locale: zhCN,
} as ConfigProviderProps

const classPrefix = 'nut-configprovider'

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
  const { children, className, ...config } = { ...defaultProps, ...props }
  const parentConfig = useConfig()
  const style = {
    ...convertThemeVarsToCSSVars(config.theme || {}),
    ...config.style,
  }

  return (
    <ConfigContext.Provider
      value={{
        ...parentConfig,
        ...config,
      }}
    >
      <div className={classNames(classPrefix, className)} style={style}>
        {children}
      </div>
    </ConfigContext.Provider>
  )
}

ConfigProvider.defaultProps = defaultProps
ConfigProvider.displayName = 'NutConfigProvider'
