import React from 'react'
import { TextArea } from '@nutui/nutui-react-taro'
import Taro, { pxTransform } from '@tarojs/taro'

const Demo1 = () => {
  const isHarmony = [
    Taro.ENV_TYPE.HARMONY,
    Taro.ENV_TYPE.HARMONYHYBRID,
  ].includes(Taro.getEnv())

  return (
    <TextArea
      defaultValue="基础用法"
      className="text-1"
      style={{ fontSize: isHarmony ? pxTransform(12) : '12px' }}
      onChange={(value) => console.log('change', value)}
      onBlur={() => console.log('blur')}
      onFocus={() => console.log('focus')}
    />
  )
}
export default Demo1
