import React, { FunctionComponent, createContext, useContext } from 'react'
import classNames from 'classnames'
import kebabCase from 'lodash.kebabcase'
import isequal from 'lodash.isequal'
import useMemo from '@/utils/use-memo'
import { BasicComponent } from '@/utils/typings'
import { BaseLang } from '@/locales/base'
import zhCN from '@/locales/zh-CN'
import type { NutCSSVariables } from './types'

export interface ConfigProviderProps extends BasicComponent {
  locale: BaseLang
  theme?: Record<string | NutCSSVariables, string>
}

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
  Partial<ConfigProviderProps & BasicComponent>
> = (props) => {
  const { style, className, children, ...config } = props

  const mergedConfig = useMemo(
    () => {
      return {
        ...getDefaultConfig(),
        ...config,
      }
    },
    [config],
    (prev, next) =>
      prev.some((prevTheme, index) => {
        const nextTheme = next[index]

        return !isequal(prevTheme, nextTheme)
      })
  ) as ConfigProviderProps

  const cssVarStyle = React.useMemo(() => {
    return convertThemeVarsToCSSVars(mergedConfig.theme || {})
  }, [mergedConfig.theme])

  return (
    <ConfigContext.Provider value={mergedConfig}>
      <div
        className={classNames(classPrefix, className)}
        style={{
          ...cssVarStyle,
          ...style,
        }}
      >
        {children}
      </div>
    </ConfigContext.Provider>
  )
}

ConfigProvider.displayName = 'NutConfigProvider'
