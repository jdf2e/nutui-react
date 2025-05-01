import React, { useState } from 'react'
import { Steps, Step, Button, Cell, Space } from '@nutui/nutui-react'

const Demo1 = () => {
  const [val, setVal] = useState(1)
  const handleStep = () => {
    const newVal = (val % 3) + 1
    setVal(newVal)
  }
  return (
    <>
      <Cell>
        <Space direction="vertical">
          <Steps value={val} status="default">
            <Step value={1} title="节点内容" />
            <Step value={2} title="节点内容" />
          </Steps>
          <Steps value={val} status="business">
            <Step value={1} title="节点内容" />
            <Step value={2} title="节点内容" />
          </Steps>
          <Steps value={val} status="dynamic">
            <Step value={1} title="节点内容" />
            <Step value={2} title="节点内容" />
          </Steps>
        </Space>
      </Cell>
      <Cell>
        <Space direction="vertical">
          <Steps value={val} status="default">
            <Step value={1} title="节点内容" />
            <Step value={2} title="节点内容" />
            <Step value={3} title="节点内容" />
          </Steps>
          <Steps value={val} status="business">
            <Step value={1} title="节点内容" />
            <Step value={2} title="节点内容" />
            <Step value={3} title="节点内容" />
          </Steps>
          <Steps value={val} status="dynamic">
            <Step value={1} title="节点内容" />
            <Step value={2} title="节点内容" />
            <Step value={3} title="节点内容" />
          </Steps>
        </Space>
      </Cell>
      <Cell>
        <Space direction="vertical">
          <Steps value={val} status="default">
            <Step value={1} title="节点内容" />
            <Step value={2} title="节点内容" />
            <Step value={3} title="节点内容" />
            <Step value={4} title="节点内容" />
          </Steps>
          <Steps value={val} status="business">
            <Step value={1} title="节点内容" />
            <Step value={2} title="节点内容" />
            <Step value={3} title="节点内容" />
            <Step value={4} title="节点内容" />
          </Steps>
          <Steps value={val} status="dynamic">
            <Step value={1} title="节点内容" />
            <Step value={2} title="节点内容" />
            <Step value={3} title="节点内容" />
            <Step value={4} title="节点内容" />
          </Steps>
        </Space>
      </Cell>
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <Button size="small" type="danger" onClick={() => handleStep()}>
          下一步
        </Button>
      </div>
    </>
  )
}
export default Demo1
