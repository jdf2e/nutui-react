import React from 'react'
import { Price } from '@nutui/nutui-react-taro'
import { Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'

const Demo8 = () => {
  const harmonyAndRn = [
    Taro.ENV_TYPE.RN,
    Taro.ENV_TYPE.HARMONYHYBRID,
    Taro.ENV_TYPE.HARMONY,
  ].includes(Taro.getEnv())
  return (
    <View
      style={
        harmonyAndRn
          ? {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }
          : {}
      }
    >
      <Price price={1513.12} size="normal" thousands />
      <Text>&nbsp;</Text>
      <Price price={1513.88} thousands line />
    </View>
  )
}
export default Demo8
