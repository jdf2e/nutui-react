import React from 'react'
import { Radio } from '@nutui/nutui-react-taro'
import { Checklist } from '@nutui/icons-react-taro'

const Demo8 = () => {
  return (
    <Radio
      icon={<Checklist />}
      activeIcon={<Checklist style={{ color: 'red' }} />}
    >
      自定义图标
    </Radio>
  )
}
export default Demo8
