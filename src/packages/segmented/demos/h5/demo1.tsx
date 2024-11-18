import React from 'react'
import { Segmented } from '@nutui/nutui-react'

const defaultOptions = ['Daily', 'Weekly', 'Monthly']

const Demo1 = () => {
  return (
    <Segmented
      defaultValue={0}
      options={defaultOptions}
      onChange={(e) => {
        console.log('onChange', e)
      }}
    />
  )
}
export default Demo1
