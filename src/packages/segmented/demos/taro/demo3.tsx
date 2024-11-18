import React, { useState } from 'react'
import { Segmented, SegmentedItem } from '@nutui/nutui-react-taro'
import { AfterSaleService, Apps } from '@nutui/icons-react-taro'

const defaultOptions: SegmentedItem[] = [
  {
    label: 'Apps',
    value: 'Apps',
    icon: <Apps color="#ffffff" />,
  },
  {
    label: 'AfterSaleService',
    value: 'AfterSaleService',
    icon: <AfterSaleService color="#ffffff" />,
  },
]

const Demo3 = () => {
  const [value, setValue] = useState<string | number>('Apps')
  return (
    <Segmented
      value={value}
      options={defaultOptions}
      style={{ width: 173 }}
      onChange={(val) => {
        setValue(val)
      }}
    />
  )
}
export default Demo3
