import React from 'react'
import { Steps, Step, Cell } from '@nutui/nutui-react-taro'
import { Transit } from '@nutui/icons-react-taro'

const Demo6 = () => {
  return (
    <Cell>
      <Steps value={2} type="icon" layout="double" status="enhanced">
        <Step value={1} title="已下单" type="dot" />
        <Step value={2} title="进行中" icon={<Transit />} />
        <Step value={3} title="已完成" icon={<Transit />} />
      </Steps>
    </Cell>
  )
}
export default Demo6
