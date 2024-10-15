import React from 'react'
import { Cell, Progress } from '@nutui/nutui-react-taro'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo2 = () => {
  return (
    <Cell>
      <Progress
        percent={30}
        color={harmonyAndRn() ? '#FF0F23' : 'var(--nutui-color-primary)'}
        background={harmonyAndRn() ? '#FFEAE8' : 'var(--nutui-brand-1)'}
        strokeWidth="15"
      />
    </Cell>
  )
}
export default Demo2
