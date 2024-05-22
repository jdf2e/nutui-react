import React from 'react'
import { Divider } from '@nutui/nutui-react-taro'
import Taro, { pxTransform } from '@tarojs/taro'

const Demo5 = () => {
  /* RN unsupported dashed / dotted border style */
  const isRn = Taro.getEnv() === Taro.ENV_TYPE.RN
  const isHarmony =
    Taro.getEnv() === Taro.ENV_TYPE.HARMONY ||
    Taro.getEnv() === Taro.ENV_TYPE.HARMONYHYBRID
  return (
    <>
      <Divider
        style={{
          color: '#1989fa',
          paddingLeft: isHarmony ? pxTransform(16) : 16,
          paddingRight: isHarmony ? pxTransform(16) : 16,
          '--nutui-divider-border-color': '#1989fa',
          '--nutui-divider-border-style': isRn ? 'solid' : 'dashed',
        }}
      >
        文本
      </Divider>
    </>
  )
}
export default Demo5
