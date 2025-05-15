import React from 'react'
import { Cell, Indicator, pxTransform } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo2 = () => {
  return (
    <Cell>
      <Indicator total={6} current={5}>
        <View
          style={{
            display: 'flex',
            width: pxTransform(14),
            height: pxTransform(14),
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: pxTransform(11),
            color: '#FFFFFF',
            borderWidth: pxTransform(1),
            borderColor: '#FFFFFF',
            borderRadius: pxTransform(14),
            margin: pxTransform(4),
            backgroundColor: '#ff0f23',
          }}
        >
          5
        </View>
      </Indicator>
    </Cell>
  )
}
export default Demo2
