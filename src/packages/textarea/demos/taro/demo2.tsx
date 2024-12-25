import React, { useState } from 'react'
import { TextArea } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [value, setValue] = useState('')
  return (
    <TextArea
      value={value}
      onChange={(value) => setValue(value)}
      type="container"
    />
  )
}
export default Demo2
