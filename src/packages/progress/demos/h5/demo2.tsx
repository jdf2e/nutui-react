import React from 'react'
import { Progress, Cell } from '@nutui/nutui-react'

const Demo2 = () => {
  return (
    <Cell>
      <Progress
        percent={30}
        color="var(--nutui-color-primary)"
        background="var(--nutui-brand-1)"
        strokeWidth="15"
      />
    </Cell>
  )
}
export default Demo2
