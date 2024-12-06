import React from 'react'
import { Segmented, Cell } from '@nutui/nutui-react-taro'

const defaultOptions = ['Daily', 'Weekly', 'Monthly']

const Demo1 = () => {
  return (
    <Cell>
      <Segmented
        defaultValue={0}
        options={defaultOptions}
        onChange={(e) => {
          console.log('onChange', e)
        }}
      />
    </Cell>
  )
}
export default Demo1
