import React from 'react'
import { ConfigProvider } from './configprovider'
import TextArea from '../textarea'
import enUS from '../../locales/en-US'
import zhCN from '../../locales/zh-CN'
import zhTW from '../../locales/zh-TW'

const ConfigProviderDemo = () => {
  return (
    <>
      <div className="demo">
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
