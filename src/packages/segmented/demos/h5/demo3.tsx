import React, { useState } from 'react'
import { Segmented, SegmentedItem, Cell } from '@nutui/nutui-react'
import { Star } from '@nutui/icons-react'

const defaultOptions: SegmentedItem[] = [
  {
    label: 'Apps',
    value: 'Apps',
    icon: <Star />,
  },
  {
    label: 'AfterSaleService',
    value: 'AfterSaleService',
    icon: <Star />,
  },
]

const Demo3 = () => {
  const [value, setValue] = useState<string | number>('Apps')
  return (
    <Cell>
      <Segmented
        value={value}
        options={defaultOptions}
        onChange={(val) => {
          setValue(val)
        }}
      />
    </Cell>
  )
}
export default Demo3
