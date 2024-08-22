import React from 'react'
import { Radio } from '@nutui/nutui-react'
import { Checklist } from '@nutui/icons-react'

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
