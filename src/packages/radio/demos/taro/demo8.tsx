import React from 'react'
import { Radio } from '@nutui/nutui-react-taro'
import { Check } from '@nutui/icons-react-taro'

const Demo8 = () => {
  return (
    <Radio icon={<Check />} activeIcon={<Check color="red" />}>
      自定义图标
    </Radio>
  )
}
export default Demo8
