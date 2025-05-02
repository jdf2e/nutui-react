import React, { FunctionComponent, createContext, useContext } from 'react'
import classNames from 'classnames'
import kebabCase from 'lodash.kebabcase'
import isEqual from 'react-fast-compare'
import { View } from '@tarojs/components'
import { useMemo } from '@/hooks/use-memo'
import zhCN from '@/locales/zh-CN'
import { TaroConfigProviderProps, Locales as LocalesType } from '@/types'

type Locales = Partial<LocalesType>
export const defaultConfigRef: {
  current: TaroConfigProviderProps<Locales>
} = {
  current: {
    locale: zhCN,
    direction: 'ltr',
  },
}

export const setDefaultConfig = (config: TaroConfigProviderProps<Locales>) => {
  defaultConfigRef.current = config
}

export const getDefaultConfig = () => {
  return defaultConfigRef.current
}

const ConfigContext = createContext<TaroConfigProviderProps<Locales> | null>(
  null
)

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

export const useRtl = () => {
  const { direction } = useConfig()
  return direction === 'rtl'
}

export const ConfigProvider: FunctionComponent<
  Partial<TaroConfigProviderProps<Locales>>
> = (props) => {
  const { style, className, children, direction, ...config } = props
  const classPrefix = 'nut-configprovider'
  const mergedConfig = useMemo(
    () => {
      return {
        ...getDefaultConfig(),
        ...config,
        direction,
      }
    },
    [config, direction],
    (prev, next) =>
      prev.some((prevTheme, index) => {
        const nextTheme = next[index]
        return !isEqual(prevTheme, nextTheme)
      })
  ) as TaroConfigProviderProps<Locales>

  const cssVarStyle = React.useMemo(() => {
    return convertThemeVarsToCSSVars(mergedConfig.theme || {})
  }, [mergedConfig.theme])

  return (
    <ConfigContext.Provider value={mergedConfig}>
      <View
        className={classNames(classPrefix, className, `nut-${direction}`)}
        style={{
          ...cssVarStyle,
          ...style,
          direction,
        }}
      >
        {children}
      </View>
    </ConfigContext.Provider>
  )
}

ConfigProvider.displayName = 'NutConfigProvider'
