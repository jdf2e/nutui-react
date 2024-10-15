import React from 'react'
import { Input } from '@nutui/nutui-react-taro'
import { Close } from '@nutui/icons-react-taro'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo6 = () => {
  return (
    <>
      <Input
        clearable
        placeholder="显示清除图标"
        placeholderTextColor="#757575"
      />
      <Input
        clearable
        clearIcon={!harmonyAndRn() ? <Close /> : null}
        placeholder="显示清除图标"
        placeholderTextColor="#757575"
      />
    </>
  )
}
export default Demo6
