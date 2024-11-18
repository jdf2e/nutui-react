import React, { useState } from 'react'
import { Segmented } from '@nutui/nutui-react-taro'

const defaultOptions = ['Daily', 'Weekly', 'Monthly']

const Demo2 = () => {
  const [value, setValue] = useState<string | number>(1)
  return (
    <Segmented
      value={value}
      options={defaultOptions}
      style={{ width: 150 }}
      onChange={(val) => {
        setValue(val)
      }}
    />
  )
}
export default Demo2
