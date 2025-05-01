import React, { useState } from 'react'
import { Steps, Step, Button, Space, Cell } from '@nutui/nutui-react'

const Demo3 = () => {
  const [val, setVal] = useState(1)
  const handleStep = () => {
    const newVal = (val % 3) + 1
    setVal(newVal)
  }
  const handleClickStep = (value: number) => {
    console.log(value)
  }
  return (
    <>
      <Cell>
        <Space direction="vertical">
          <Steps value={val} status="default">
            <Step value={1} title="节点内容" description="03月17日19:59截止" />
            <Step value={2} title="节点内容" description="03月17日21:59截止" />
          </Steps>
          <Steps value={val} status="dynamic">
            <Step value={1} title="节点内容" description="03月17日19:59截止" />
            <Step value={2} title="节点内容" description="03月17日21:59截止" />
          </Steps>
          <Steps value={val} status="enhanced">
            <Step value={1} title="节点内容" description="03月17日19:59截止" />
            <Step value={2} title="节点内容" description="03月17日21:59截止" />
          </Steps>
        </Space>
      </Cell>
      <Cell>
        <Space direction="vertical">
          <Steps value={val} status="default">
            <Step value={1} title="节点内容" description="03月17日19:59截止" />
            <Step value={2} title="节点内容" description="03月17日21:59截止" />
            <Step value={3} title="节点内容" description="03月17日21:59截止" />
          </Steps>
          <Steps value={val} status="dynamic">
            <Step value={1} title="节点内容" description="03月17日19:59截止" />
            <Step value={2} title="节点内容" description="03月17日21:59截止" />
            <Step value={3} title="节点内容" description="03月17日21:59截止" />
          </Steps>
          <Steps value={val} status="enhanced">
            <Step value={1} title="节点内容" description="03月17日19:59截止" />
            <Step value={2} title="节点内容" description="03月17日21:59截止" />
            <Step value={3} title="节点内容" description="03月17日21:59截止" />
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
export default Demo3
