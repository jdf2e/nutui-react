import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Input } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo8 = () => {
  const [currentLength, setCurrentLength] = useState(0)
  return (
    <View
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
      }}
    >
      <Input
        type="text"
        maxLength={20}
        onChange={(val) => setCurrentLength(val.length)}
      />
      <View
        style={{
          marginRight: pxTransform(10),
        }}
      >
        <Text
          style={{
            width: pxTransform(40),
            fontSize: pxTransform(12),
          }}
        >
          {currentLength} / 20
        </Text>
      </View>
    </View>
  )
}
export default Demo8
