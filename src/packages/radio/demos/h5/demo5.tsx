import React from 'react'
import { Radio } from '@nutui/nutui-react'

const Demo5 = () => {
  return (
    <Radio.Group disabled defaultValue="1">
      <Radio shape="button" value="1">
        选项1
      </Radio>
      <Radio shape="button" value="2">
        选项2
      </Radio>
      <Radio shape="button" value="3">
        选项3
      </Radio>
    </Radio.Group>
  )
}
export default Demo5
