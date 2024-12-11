import React, { useState } from 'react'
import { Segmented, SegmentedItem, Cell } from '@nutui/nutui-react'
import { AfterSaleService, Apps } from '@nutui/icons-react'

const defaultOptions: SegmentedItem[] = [
  {
    label: 'Apps',
    value: 'Apps',
    icon: <Apps />,
  },
  {
    label: 'AfterSaleService',
    value: 'AfterSaleService',
    icon: <AfterSaleService />,
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
