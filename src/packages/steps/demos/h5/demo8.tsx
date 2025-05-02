import React, { useState } from 'react'
import { Steps, Step, Button, Space, Cell } from '@nutui/nutui-react'

const Demo8 = () => {
  const data = [
    {
      value: 1,
      description: '预约',
    },
    {
      value: 2,
      description: '购买下单',
    },
    {
      value: 3,
      description: '购买下单',
    },
    {
      value: 4,
      description: '服务屡约',
    },
    {
      value: 5,
      description: '完成',
    },
  ]
  const [val, setVal] = useState(2)
  const handleStep = () => {
    const newVal = (val % 5) + 1
    setVal(newVal)
  }
  return (
    <>
      <Space justify="between">
        <Cell>
          <Steps direction="vertical" value={val} type="dot" status="business">
            {data.map((item, index) => (
              <Step
                key={index}
                value={item.value}
                description={item.description}
              />
            ))}
          </Steps>
        </Cell>
        <Cell>
          <Steps direction="vertical" value={val} type="dot" status="dynamic">
            {data.map((item, index) => (
              <Step
                key={index}
                value={item.value}
                description={item.description}
              />
            ))}
          </Steps>
        </Cell>
        <Cell>
          <Steps direction="vertical" value={val} type="dot" status="enhanced">
            {data.map((item, index) => (
              <Step
                key={index}
                value={item.value}
                description={item.description}
              />
            ))}
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
