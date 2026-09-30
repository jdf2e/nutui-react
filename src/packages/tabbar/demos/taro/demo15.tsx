import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View, ViewProps } from '@tarojs/components'
import { Cart, Home, Message, User } from '@nutui/icons-react-taro'
import { ConfigProvider, Tabbar } from '@nutui/nutui-react-taro'

const BlurSourceView = View as React.ComponentType<
  ViewProps & { blurId?: string }
>
const materialTargetId = 'tabbar-material-demo'

function isNative() {
  return ['RN', 'JDHYBRID', 'HARMONY', 'HARMONYHYBRID', 'JDHARMONY'].includes(
    String(Taro.getEnv()).toUpperCase()
  )
}

function isNativeAndroid() {
  try {
    return (
      ['RN', 'JDHYBRID'].includes(String(Taro.getEnv()).toUpperCase()) &&
      String(Taro.getSystemInfoSync().platform).toLowerCase() === 'android'
    )
  } catch {
    return false
  }
}

function readSystemDark() {
  try {
    return String(Taro.getSystemInfoSync().theme).toLowerCase() === 'dark'
  } catch {
    return false
  }
}

const BlurSource = ({ children }: { children: React.ReactNode }) =>
  isNativeAndroid() ? (
    <BlurSourceView blurId={materialTargetId} style={{ height: '100%' }}>
      {children}
    </BlurSourceView>
  ) : (
    <>{children}</>
  )

const Demo15 = () => {
  const native = isNative()
  const [dark, setDark] = useState(() => native && readSystemDark())
  const [solidPreview, setSolidPreview] = useState(false)
  const [value, setValue] = useState(0)
  const solidColor = dark ? '#14171a' : '#ffffff'
  const tint = dark ? 'rgba(20, 23, 26, 0.8)' : 'rgba(255, 255, 255, 0.8)'
  const theme = {
    nutuiTabbarBackground: solidColor,
    nutuiTabbarMaterialTint: solidPreview ? solidColor : tint,
    nutuiTabbarMaterialBlur: solidPreview ? '0PX' : '3PX',
    nutuiTabbarActiveBackground: dark ? '#2a2f36' : '#f0f2f7',
    nutuiTabbarInactiveColor: dark ? '#e1e6eb' : '#11141a',
  }

  useEffect(() => {
    if (!native) return
    const handleThemeChange = (result: string | { theme?: string }) => {
      const nextTheme = typeof result === 'string' ? result : result.theme
      setDark(String(nextTheme).toLowerCase() === 'dark')
    }
    try {
      Taro.onThemeChange?.(handleThemeChange)
      return () => Taro.offThemeChange?.(handleThemeChange)
    } catch {
      return undefined
    }
  }, [native])

  return (
    <View>
      {native ? (
        <View>原生背板跟随系统明暗模式，可切换系统主题观察。</View>
      ) : (
        <>
          <View role="button" onClick={() => setDark((current) => !current)}>
            {dark ? '切换浅色材质' : '切换暗色材质'}
          </View>
          <View
            role="button"
            onClick={() => setSolidPreview((current) => !current)}
          >
            {solidPreview ? '恢复毛玻璃' : '预览实色降级'}
          </View>
        </>
      )}
      <View>在下方视口内滚动彩色内容，对比模糊与实色预览。</View>
      <ConfigProvider
        theme={theme}
        style={{
          width: '100%',
          height: '300px',
          position: 'relative',
          overflow: 'hidden',
          background: dark ? '#14171a' : '#f2f4f7',
        }}
      >
        <BlurSource>
          <ScrollView scrollY style={{ height: '100%' }}>
            {Array.from({ length: 6 }, (_, index) => (
              <View
                key={index}
                style={{
                  height: '96px',
                  padding: '16px',
                  boxSizing: 'border-box',
                  color: index % 2 ? '#ffffff' : '#11141a',
                  background:
                    index % 2
                      ? 'linear-gradient(120deg, #3f51b5, #b75ab8)'
                      : 'linear-gradient(120deg, #ffcf70, #77ded4)',
                }}
              >
                滚动背景 {index + 1}
              </View>
            ))}
          </ScrollView>
        </BlurSource>
        <Tabbar
          fixed
          materialTargetId={materialTargetId}
          value={value}
          onSwitch={setValue}
          style={{ position: 'absolute' }}
        >
          <Tabbar.Item title="首页" icon={<Home />} />
          <Tabbar.Item title="消息" icon={<Message />} />
          <Tabbar.Item title="购物车" icon={<Cart />} />
          <Tabbar.Item title="我的" icon={<User />} />
        </Tabbar>
      </ConfigProvider>
    </View>
  )
}

export default Demo15
