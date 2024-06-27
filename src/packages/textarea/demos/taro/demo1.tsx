import React from 'react'
import { TextArea } from '@nutui/nutui-react-taro'
import '../../demo.scss'

const Demo1 = () => {
  return (
    <TextArea
      defaultValue="基础用法"
      className="nut-textarea-f12"
      onChange={(value) => console.log('change', value)}
      onBlur={() => console.log('blur')}
      onFocus={() => console.log('focus')}
    />
  )
}
export default Demo1
