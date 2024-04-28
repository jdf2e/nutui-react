import React from 'react'
import { Price } from '@nutui/nutui-react-taro'
import { Text, View } from '@tarojs/components'

const Demo8 = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
      }}
    >
      <Price price={1513.12} size='normal' thousands />
      <Text>&nbsp;</Text>
      <Price price={1513.88} thousands line />
    </View>
  )
}
export default Demo8
