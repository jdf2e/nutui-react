import React from 'react'
import { ConfigProvider, TextArea } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return (
    <>
      <ConfigProvider>
        <TextArea disabled showCount maxLength={20} />
      </ConfigProvider>
    </>
  )
}

export default Demo3
