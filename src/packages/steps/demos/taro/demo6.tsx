import React from 'react'
import { Steps, Step } from '@nutui/nutui-react-taro'
import { Transit } from '@nutui/icons-react-taro'

const Demo6 = () => {
  return (
    <Steps value={2}>
      <Step value={1} title="已下单" />
      <Step
        value={2}
        title="进行中"
        icon={
          <Transit
            width={20}
            height={20}
            style={{ color: 'red', flex: 'none' }}
          />
        }
      />
      <Step value={3} title="已完成" />
    </Steps>
  )
}
export default Demo6
