import React from 'react'
import { Radio } from '@nutui/nutui-react'
import { Checklist } from '@nutui/icons-react'

const Demo9 = () => {
  return (
    <Radio.Group
      defaultValue="1"
      labelPosition="left"
      style={{ width: '100%' }}
    >
      <Radio
        icon={<Checklist />}
        activeIcon={<Checklist style={{ color: 'red' }} />}
        value="1"
      >
        自定义图标
      </Radio>
      <Radio
        icon={<Checklist />}
        activeIcon={<Checklist style={{ color: 'red' }} />}
        value="2"
      >
        自定义图标
      </Radio>
    </Radio.Group>
  )
}
export default Demo9
