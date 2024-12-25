import React, { useState } from 'react'
import { TextArea } from '@nutui/nutui-react'

const Demo2 = () => {
  const [value, setValue] = useState('')
  return (
    <TextArea
      type="container"
      value={value}
      onChange={(value) => setValue(value)}
    />
  )
}
export default Demo2
