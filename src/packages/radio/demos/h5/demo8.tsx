import React from 'react'
import { Radio } from '@nutui/nutui-react'
import { Check } from '@nutui/icons-react'

const Demo8 = () => {
  return (
    <Radio icon={<Check />} activeIcon={<Check style={{ color: 'red' }} />}>
      自定义图标
    </Radio>
  )
}
export default Demo8
