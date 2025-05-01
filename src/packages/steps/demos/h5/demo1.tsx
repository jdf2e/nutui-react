import React, { useState } from 'react'
import { Steps, Step, Button, Cell, Space } from '@nutui/nutui-react'

const Demo1 = () => {
  const [val, setVal] = useState(2)
  const handleStep = () => {
    const newVal = (val % 4) + 1
    setVal(newVal)
  }
  return (
    <>
      <Cell>
        <Space direction="vertical">
          <Steps value={2} status="default">
            <Step value={1} title="选择旧品" />
            <Step value={2} title="下单购买" />
          </Steps>
          <Steps value={val} status="business">
            <Step value={1} title="选择旧品" />
            <Step value={2} title="下单购买" />
          </Steps>
          <Steps value={val} status="dynamic">
            <Step value={1} title="选择旧品" />
            <Step value={2} title="下单购买" />
          </Steps>
        </Space>
      </Cell>
      <Cell>
        <Space direction="vertical">
          <Steps value={2} status="default">
            <Step value={1} title="选择旧品" />
            <Step value={2} title="下单购买" />
            <Step value={3} title="取旧换新" />
          </Steps>
          <Steps value={val} status="business">
            <Step value={1} title="选择旧品" />
            <Step value={2} title="下单购买" />
            <Step value={3} title="取旧换新" />
          </Steps>
          <Steps value={val} status="dynamic">
            <Step value={1} title="选择旧品" />
            <Step value={2} title="下单购买" />
            <Step value={3} title="取旧换新" />
          </Steps>
        </Space>
      </Cell>
      <Cell>
        <Space direction="vertical">
          <Steps value={val} status="default">
            <Step value={1} title="选择旧品" />
            <Step value={2} title="下单" />
            <Step value={3} title="取旧换新" />
            <Step value={4} title="完成" />
          </Steps>
          <Steps value={val} status="business">
            <Step value={1} title="选择旧品" />
            <Step value={2} title="下单" />
            <Step value={3} title="取旧换新" />
            <Step value={4} title="完成" />
          </Steps>
          <Steps value={val} status="dynamic">
            <Step value={1} title="选择旧品" />
            <Step value={2} title="下单" />
            <Step value={3} title="取旧换新" />
            <Step value={4} title="完成" />
          </Steps>
          <Steps value={val} status="enhanced">
            <Step value={1} title="选择旧品" />
            <Step value={2} title="下单" />
            <Step value={3} title="取旧换新" />
            <Step value={4} title="完成" />
          </Steps>
        </Space>
      </Cell>
      <Button size="small" type="danger" onClick={() => handleStep()}>
        下一步
      </Button>
    </>
  )
}
export default Demo1
