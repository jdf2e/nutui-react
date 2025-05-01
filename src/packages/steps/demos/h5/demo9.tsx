import React, { useState } from 'react'
import { Steps, Step, Button, Cell } from '@nutui/nutui-react'
import { PickedUp, WaitReceive } from '@nutui/icons-react'

const Demo9 = () => {
  const [value, setValue] = useState(2)
  const handleStep = () => {
    const newVal = (value % 3) + 1
    setValue(newVal)
  }
  return (
    <>
      <Cell>
        <Steps direction="vertical" value={value} type="icon" status="dynamic">
          <Step
            type="dot"
            value={1}
            description="自提地址：深圳市福田区福华路29号京东快递自提点"
          />
          <Step
            type="icon"
            value={2}
            title="待取件"
            description={
              <>
                <p>
                  你的订单已由【深圳市福田区福华路京东快递自
                  提点】上架完成，请上门自提
                </p>
                <p className="description-time">2025-01-20 07:12:30</p>
              </>
            }
            icon={<WaitReceive />}
          />
          <Step
            type="icon"
            value={3}
            title="运输中"
            description={
              <>
                <p>订单在【淮安分拣中心】完成分拣</p>
                <p className="description-time">2025-01-20 07:12:30</p>
              </>
            }
            icon={<PickedUp />}
          />
        </Steps>
      </Cell>
      <Cell>
        <Steps direction="vertical" value={value} type="icon" status="enhanced">
          <Step
            type="dot"
            value={1}
            description="自提地址：深圳市福田区福华路29号京东快递自提点"
          />
          <Step
            type="icon"
            value={2}
            title="待取件"
            description={
              <>
                <p>
                  你的订单已由【深圳市福田区福华路京东快递自
                  提点】上架完成，请上门自提
                </p>
                <p className="description-time">2025-01-20 07:12:30</p>
              </>
            }
            icon={<WaitReceive />}
          />
          <Step
            type="icon"
            value={3}
            title="运输中"
            description={
              <>
                <p>订单在【淮安分拣中心】完成分拣</p>
                <p className="description-time">2025-01-20 07:12:30</p>
              </>
            }
            icon={<PickedUp />}
          />
        </Steps>
      </Cell>
      <Button type="primary" size="small" onClick={handleStep}>
        下一步
      </Button>
    </>
  )
}
export default Demo9
