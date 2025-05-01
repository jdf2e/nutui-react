import React, { useState } from 'react'
import { Steps, Step, Button, Space } from '@nutui/nutui-react'
import { Location } from '@nutui/icons-react'

const Demo2 = () => {
  const [val, setVal] = useState(1)
  const handleStep = () => {
    const newVal = (val % 4) + 1
    setVal(newVal)
  }
  const handleClickStep = (value: number) => {
    console.log(value)
  }
  return (
    <Space direction="vertical">
      <Space direction="vertical">
        <Steps value={val} status="default" type="dot" layout="double">
          <Step value={1} title="节点内容" />
          <Step value={2} title="节点内容" />
          <Step value={3} title="节点内容" />
        </Steps>
        <Steps value={val} status="dynamic" type="dot" layout="double">
          <Step value={1} title="节点内容" />
          <Step value={2} title="节点内容" />
          <Step value={3} title="节点内容" />
          <Step value={4} title="节点内容" />
        </Steps>
        <Steps value={val} status="enhanced" type="dot" layout="double">
          <Step value={1} title="节点内容" />
          <Step value={2} title="节点内容" />
          <Step value={3} title="节点内容" />
          <Step value={4} title="节点内容" />
          <Step value={5} title="节点内容" />
        </Steps>
      </Space>
      <Space direction="vertical">
        <Steps
          value={val}
          status="default"
          type="icon"
          layout="double"
          icon={<Location />}
        >
          <Step value={1} title="节点内容" />
          <Step value={2} title="节点内容" />
          <Step value={3} title="节点内容" />
        </Steps>
        <Steps
          value={val}
          status="dynamic"
          type="icon"
          layout="double"
          icon={<Location />}
        >
          <Step value={1} title="节点内容" />
          <Step value={2} title="节点内容" />
          <Step value={3} title="节点内容" />
          <Step value={4} title="节点内容" />
        </Steps>
        <Steps value={val} status="enhanced" type="icon" layout="double">
          <Step value={1} title="节点内容" icon={<Location />} />
          <Step value={2} title="节点内容" icon={<Location />} />
          <Step value={3} title="节点内容" icon={<Location />} />
          <Step value={4} title="节点内容" icon={<Location />} />
          <Step value={5} title="节点内容" icon={<Location />} />
        </Steps>
      </Space>
      <Space direction="vertical">
        <Steps value={val} status="default" layout="double">
          <Step value={1} title="节点内容" />
          <Step value={2} title="节点内容" />
          <Step value={3} title="节点内容" />
        </Steps>
        <Steps value={val} status="dynamic" layout="double">
          <Step value={1} title="节点内容" />
          <Step value={2} title="节点内容" />
          <Step value={3} title="节点内容" />
          <Step value={4} title="节点内容" />
        </Steps>
        <Steps value={val} status="enhanced" layout="double">
          <Step value={1} title="节点内容" />
          <Step value={2} title="节点内容" />
          <Step value={3} title="节点内容" />
          <Step value={4} title="节点内容" />
          <Step value={5} title="节点内容" />
        </Steps>
      </Space>

      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <Button size="small" type="danger" onClick={() => handleStep()}>
          下一步
        </Button>
      </div>
    </Space>
  )
}
export default Demo2
