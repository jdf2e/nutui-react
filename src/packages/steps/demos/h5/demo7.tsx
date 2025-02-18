import React from 'react'
import { Steps, Step } from '@nutui/nutui-react'
import { Service, Transit, Check } from '@nutui/icons-react'

const Demo7 = () => {
  return (
    <>
      <Steps value={1}>
        <Step
          value={1}
          title="已完成"
          icon={<Service width={14} height={14} />}
        />
        <Step
          value={2}
          title="进行中"
          icon={<Transit width={14} height={14} />}
        />
        <Step
          value={3}
          title="未开始"
          icon={<Check width={14} height={14} />}
        />
      </Steps>
    </>
  )
}
export default Demo7
