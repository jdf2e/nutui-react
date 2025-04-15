import React from 'react'
import { ConfigProvider, TextArea } from '@nutui/nutui-react'

interface A {
  sss: string
}

const a: A = {
  sss: 'sss',
}

const Demo3 = () => {
  return (
    <>
      <ConfigProvider locale={a}>
        <TextArea disabled showCount maxLength={20} />
      </ConfigProvider>
    </>
  )
}

export default Demo3
