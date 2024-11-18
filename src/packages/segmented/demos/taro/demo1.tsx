import React from 'react'
import { Segmented } from '@nutui/nutui-react-taro'

const defaultOptions = ['Daily', 'Weekly', 'Monthly']

const Demo1 = () => {
  return (
    <Segmented
      defaultValue={0}
      options={defaultOptions}
      style={{ width: 150 }}
      onChange={(e) => {
        console.log('onChange', e)
      }}
    />
  )
}
export default Demo1
