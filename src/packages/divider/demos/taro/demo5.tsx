import React from 'react'
import { Divider } from '@nutui/nutui-react-taro'
import Taro, { pxTransform } from '@tarojs/taro'

const Demo5 = () => {
  /* RN unsupported dashed / dotted border style */
  const isRn = Taro.getEnv() === 'RN'
  const isHarmony = ['HARMONY', 'HARMONYHYBRID'].includes(Taro.getEnv())
  return (
    <>
      <Divider
        style={{
          color: '#1989fa',
          paddingLeft: isHarmony ? pxTransform(16) : 16,
          paddingRight: isHarmony ? pxTransform(16) : 16,
          borderColor: '#1989fa',
          borderStyle: isRn ? 'solid' : 'dashed',
        }}
      >
        文本
      </Divider>
    </>
  )
}
export default Demo5
