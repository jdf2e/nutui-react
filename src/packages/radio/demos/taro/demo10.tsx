import React, { useState } from 'react'
import { Radio } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'

const Demo10 = () => {
  const [checkedValue] = useState(1)
  return (
    <>
      <Radio.Group
        defaultValue={checkedValue}
        onChange={(value) =>
          Taro.showToast({
            icon: 'none',
            title: value.toString(),
          })
        }
      >
        <Radio value={1}>触发事件</Radio>
        <Radio value={2}>触发事件</Radio>
      </Radio.Group>
    </>
  )
}
export default Demo10
