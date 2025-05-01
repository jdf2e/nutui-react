import React, { useState } from 'react'
import { Steps, Step, Button, Space, Cell } from '@nutui/nutui-react'

const Demo8 = () => {
  const [val, setVal] = useState(1)
  const handleStep = () => {
    const newVal = (val % 5) + 1
    setVal(newVal)
  }
  return (
    <>
      <Space justify="between">
        <Cell>
          <Steps direction="vertical" value={val} type="dot" status="dynamic">
            <Step value={1} description="预约" />
            <Step value={2} description="购买下单" />
            <Step value={3} description="购买下单" />
            <Step value={4} description="服务屡约" />
            <Step value={5} description="完成" />
          </Steps>
        </Cell>
        <Cell>
          <Steps direction="vertical" value={val} type="dot" status="enhanced">
            <Step value={1} description="预约" />
            <Step value={2} description="购买下单" />
            <Step value={3} description="购买下单" />
            <Step value={4} description="服务屡约" />
            <Step value={5} description="完成" />
          </Steps>
        </Cell>
      </Space>
      <Button type="primary" size="small" onClick={handleStep}>
        下一步
      </Button>
    </>
  )
}
export default Demo8
