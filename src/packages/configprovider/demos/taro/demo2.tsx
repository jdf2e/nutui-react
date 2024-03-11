import React from 'react'
import { ConfigProvider, TextArea } from '@nutui/nutui-react-taro'
import enUS from '@nutui/nutui-react-taro/dist/locales/en-US.ts'

const Demo2 = () => {
  return (
    <>
      <h2>Textarea默认</h2>
      <ConfigProvider>
        <TextArea disabled showCount maxLength={20} />
      </ConfigProvider>
      <h2>Textarea英文</h2>
      <ConfigProvider locale={enUS}>
        <TextArea disabled showCount maxLength={20} />
      </ConfigProvider>
    </>
  )
}

export default Demo2
