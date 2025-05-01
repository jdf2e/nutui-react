import React, { useState } from 'react'
import { Steps, Step, Cell, Space, Button } from '@nutui/nutui-react'
import { Location } from '@nutui/icons-react'

const Demo7 = () => {
  const [val, setVal] = useState(1)
  const handleStep = () => {
    const newVal = (val % 3) + 1
    setVal(newVal)
  }
  return (
    <>
      <Cell>
        <Space direction="vertical">
          <Steps value={1} type="icon">
            <Step value={1} title="节点内容" icon={<Location />} />
            <Step value={2} title="节点内容" icon={<Location />} />
            <Step value={3} title="节点内容" icon={<Location />} />
          </Steps>
          <Steps value={val} type="icon" status="dynamic">
            <Step value={1} title="节点内容" icon={<Location />} />
            <Step value={2} title="节点内容" icon={<Location />} />
            <Step value={3} title="节点内容" icon={<Location />} />
          </Steps>
          <Steps value={val} type="icon" status="enhanced">
            <Step value={1} title="节点内容" icon={<Location />} />
            <Step value={2} title="节点内容" icon={<Location />} />
            <Step value={3} title="节点内容" icon={<Location />} />
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
export default Demo7
