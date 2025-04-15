import React, { createContext, useContext, Context } from 'react'
import classNames from 'classnames'
import kebabCase from 'lodash.kebabcase'
import isEqual from 'react-fast-compare'
import { useMemo } from '@/hooks/use-memo'
import zhCN from '@/locales/zh-CN'
import { inBrowser } from '@/utils'
import { WebConfigProviderProps, Locales as LocalesType } from '@/types'

type Locales = Partial<LocalesType>

export const defaultConfigRef: {
  current: any
} = {
  current: {
    locale: zhCN,
    direction: 'ltr',
  },
}

export const setDefaultConfig = <T,>(config: WebConfigProviderProps<T>) => {
  defaultConfigRef.current = config
}

export const getDefaultConfig = <T = WebConfigProviderProps<Locales>,>() => {
  return defaultConfigRef.current as T
}

const ConfigContext = createContext<WebConfigProviderProps<Locales> | null>(
  null
)

export const useConfig = <T = Locales,>() => {
  return (
    useContext<WebConfigProviderProps<T>>(
      ConfigContext as any as Context<WebConfigProviderProps<T>>
    ) ?? getDefaultConfig<WebConfigProviderProps<T>>()
  )
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
  if (direction) {
    return direction === 'rtl'
  }
  return inBrowser && document.dir === 'rtl'
}

export const ConfigProvider = <T = Locales,>(
  props: Partial<WebConfigProviderProps<T>>
) => {
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
  ) as WebConfigProviderProps<Locales>

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
          direction,
        }}
        dir={direction}
      >
        {children}
      </div>
    </ConfigContext.Provider>
  )
}

ConfigProvider.displayName = 'NutConfigProvider'
