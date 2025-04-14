import React from 'react'
import { ConfigProvider, TextArea, Button } from '@nutui/nutui-react'

const loc = { text: 'ee' }
const Demo4 = () => {
  return (
    <>
      <ConfigProvider locale={loc}>
        <Button>{loc.text}</Button>
        <TextArea disabled showCount maxLength={20} />
      </ConfigProvider>
    </>
  )
}

export default Demo4
