import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { SearchBar } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const [value, setValue] = useState('')
  const change = (val: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(val)
  }
  return (
    <>
      <SearchBar
        onChange={(val: string, e: React.ChangeEvent<HTMLInputElement>) =>
          change(val, e)
        }
        maxLength={10}
      />
      <View
        style={{
          height: '40px',
          lineHeight: '40px',
          color: '#666',
          fontSize: '14px',
        }}
      >
        {value}
      </View>
    </>
  )
}
export default Demo7
