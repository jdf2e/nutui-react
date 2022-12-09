import React from 'react'
import { ConfigProvider, TextArea, Button } from '@/packages/nutui.react.taro'
import enUS from '@/locales/en-US'
import zhCN from '@/locales/zh-CN'
import zhTW from '@/locales/zh-TW'

const darkTheme = {
  'nutui-brand-color': '#fa2c19',
  'nutui-brand-color-start': '#ff404f',
  'nutui-brand-color-end': '#fa2c19',
  'nutui-brand-link-color': '#396acc',
  'nutui-gray0': '#000000',
  'nutui-gray1': '#e6e6e6',
  'nutui-gray2': '#828282',
  'nutui-gray3': '#404040',
  'nutui-gray4': '#0a0a0a',
  'nutui-gray5': '#141414',
  'nutui-gray6': '#1f1f1f',
  'nutui-gray7': 'rgba(0, 0, 0, 0.7)',
  'nutui-gray8': 'rgba(0, 0, 0, 0.4)',
  'nutui-gray9': 'rgba(0, 0, 0, 0.08)',
  'nutui-gray10': 'rgba(0, 0, 0, 0.02)',
}

const ConfigProviderDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>Textarea 默认</h2>
        <ConfigProvider theme={darkTheme}>
          <Button type="primary">Test</Button>
          <TextArea disabled limitshow maxlength="20" />
        </ConfigProvider>
        <h2>Textarea 英文</h2>
        <ConfigProvider locale={enUS}>
          <TextArea disabled limitshow maxlength="20" />
        </ConfigProvider>
        <h2>Textarea 中文</h2>
        <ConfigProvider locale={zhCN}>
          <TextArea disabled limitshow maxlength="20" />
        </ConfigProvider>
        <h2>Textarea 繁体中文</h2>
        <ConfigProvider locale={zhTW}>
          <TextArea disabled limitshow maxlength="20" />
        </ConfigProvider>
      </div>
    </>
  )
}

export default ConfigProviderDemo
