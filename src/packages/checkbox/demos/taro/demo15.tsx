import React from 'react'
import { Checkbox } from '@nutui/nutui-react-taro'

const Demo15 = () => {
  return (
    <Checkbox.Group defaultValue={['1']} labelPosition="left" list>
      <Checkbox value="1" label="选项1" />
      <Checkbox value="2" label="选项2" />
      <Checkbox value="3" label="选项3" />
    </Checkbox.Group>
  )
}
export default Demo15
