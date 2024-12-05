import React, { useState } from 'react'
import { Segmented, Cell } from '@nutui/nutui-react'

const defaultOptions = ['Daily', 'Weekly', 'Monthly']

const Demo2 = () => {
  const [value, setValue] = useState<string | number>(1)
  return (
    <Cell>
      <Segmented
        value={value}
        options={defaultOptions}
        onChange={(val) => {
          setValue(val)
        }}
      />
    </Cell>
  )
}
export default Demo2
