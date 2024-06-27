import React, { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { Input } from '@nutui/nutui-react-taro'
import '../../demo.scss'

const Demo8 = () => {
  const [currentLength, setCurrentLength] = useState(0)
  return (
    <>
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
          placeholderTextColor="#757575"
        />
        <View className="nut-input-demo-countword-w">
          <Text className="nut-input-demo-countword">{currentLength} / 20</Text>
        </View>
      </View>
    </>
  )
}
export default Demo8
