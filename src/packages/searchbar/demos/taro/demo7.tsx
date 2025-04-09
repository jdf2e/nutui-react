import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { SearchBar, pxTransform } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const [value, setValue] = useState('')
  return (
    <>
      <SearchBar onChange={(val: string) => setValue(val)} maxLength={10} />
      <View
        style={{
          height: pxTransform(40),
          lineHeight: pxTransform(40),
          color: '#666',
          fontSize: pxTransform(14),
        }}
      >
        {value}
      </View>
    </>
  )
}
export default Demo7
