import React, { FunctionComponent, createContext, useContext } from 'react'
import { BaseLang } from '@/locales/base'
import zhCN from '@/locales/zh-CN'

export interface ConfigProviderProps {
  locale: BaseLang
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

export const useConfig = () => {
  return useContext(ConfigContext) ?? getDefaultConfig()
}

// 创建一个 Context 对象
const ConfigContext = createContext<ConfigProviderProps | null>(null)

export const ConfigProvider: FunctionComponent<
  Partial<ConfigProviderProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children, ...config } = { ...defaultProps, ...props }
  const parentConfig = useConfig()

  return (
    <ConfigContext.Provider
      value={{
        ...parentConfig,
        ...config,
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}

ConfigProvider.defaultProps = defaultProps
ConfigProvider.displayName = 'NutConfigProvider'
