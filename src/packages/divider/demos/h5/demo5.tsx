import React from 'react'
import { Divider } from '@nutui/nutui-react'

const Demo5 = () => {
  return (
    <>
      <Divider
        style={{
          color: '#1989fa',
          padding: '0 16px',
          '--nutui-divider-border-color': '#1989fa',
          '--nutui-divider-border-style': 'dashed',
        }}
      >
        文本
      </Divider>
    </>
  )
}
export default Demo5
