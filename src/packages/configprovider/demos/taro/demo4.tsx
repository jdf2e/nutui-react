import React from 'react'
import { ConfigProvider, TextArea } from '@nutui/nutui-react-taro'
import enUS from '@nutui/nutui-react-taro/dist/locales/en-US.ts'

const Demo4 = () => {
  return (
    <>
      <ConfigProvider locale={enUS}>
        <TextArea disabled showCount maxLength={20} />
      </ConfigProvider>
    </>
  )
}

export default Demo4
