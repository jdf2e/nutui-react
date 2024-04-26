import React, { useState } from 'react'
import { Radio, Toast } from '@nutui/nutui-react'

const Demo10 = () => {
  const [checkedValue] = useState(1)
  return (
    <>
      <Radio.Group
        defaultValue={checkedValue}
        onChange={(value) => Toast.show(value.toString())}
      >
        <Radio value={1}>触发事件</Radio>
        <Radio value={2}>触发事件</Radio>
      </Radio.Group>
    </>
  )
}
export default Demo10
