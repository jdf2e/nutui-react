import React, { useState } from 'react'
import { Steps, Step, Cell, Space, Button } from '@nutui/nutui-react'
import { Location } from '@nutui/icons-react'

const Demo7 = () => {
  const [val, setVal] = useState(2)
  const handleStep = () => {
    const newVal = (val % 3) + 1
    setVal(newVal)
  }
  return (
    <>
      <Cell>
        <Space direction="vertical">
          <Steps value={1} type="icon">
            <Step value={1} title="澳大利亚" icon={<Location />} />
            <Step value={2} title="京东厦门保税仓" icon={<Location />} />
          </Steps>
          <Steps value={val} type="icon" status="dynamic">
            <Step value={1} title="澳大利亚" icon={<Location />} />
            <Step value={2} title="京东厦门保税仓" icon={<Location />} />
            <Step value={3} title="北京市" icon={<Location />} />
          </Steps>
          <Steps value={val} type="icon" status="enhanced">
            <Step value={1} title="澳大利亚" icon={<Location />} />
            <Step value={2} title="保税仓" icon={<Location />} />
            <Step value={3} title="厦门市" icon={<Location />} />
            <Step value={4} title="北京市" icon={<Location />} />
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
