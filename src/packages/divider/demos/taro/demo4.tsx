import React from 'react'
import { Divider } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  /* RN unsupported dashed / dotted border style */
  return (
    <Divider style={{ '--nutui-divider-border-style': 'dashed' }}>文本</Divider>
  )
}
export default Demo4
