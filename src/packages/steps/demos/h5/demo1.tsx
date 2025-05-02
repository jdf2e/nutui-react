import React, { useState } from 'react'
import { Steps, Step, Button, Cell, Space } from '@nutui/nutui-react'

const Demo1 = () => {
  const data = [
    {
      value: 1,
      title: '选择旧品',
    },
    {
      value: 2,
      title: '下单购买',
    },
    {
      value: 3,
      title: '取旧换新',
    },
    {
      value: 4,
      title: '完成',
    },
  ]
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
            {data.slice(0, 2).map((item, index) => (
              <Step key={index} value={item.value} title={item.title} />
            ))}
          </Steps>
          <Steps value={2} status="business">
            {data.slice(0, 2).map((item, index) => (
              <Step key={index} value={item.value} title={item.title} />
            ))}
          </Steps>
          <Steps value={2} status="dynamic">
            {data.slice(0, 2).map((item, index) => (
              <Step key={index} value={item.value} title={item.title} />
            ))}
          </Steps>
        </Space>
      </Cell>
      <Cell>
        <Space direction="vertical">
          <Steps value={2} status="default">
            {data.slice(0, 3).map((item, index) => (
              <Step key={index} value={item.value} title={item.title} />
            ))}
          </Steps>
          <Steps value={2} status="business">
            {data.slice(0, 3).map((item, index) => (
              <Step key={index} value={item.value} title={item.title} />
            ))}
          </Steps>
          <Steps value={2} status="dynamic">
            {data.slice(0, 3).map((item, index) => (
              <Step key={index} value={item.value} title={item.title} />
            ))}
          </Steps>
        </Space>
      </Cell>
      <Cell>
        <Space direction="vertical">
          <Steps value={val} status="default">
            {data.map((item, index) => (
              <Step key={index} value={item.value} title={item.title} />
            ))}
          </Steps>
          <Steps value={val} status="business">
            {data.map((item, index) => (
              <Step key={index} value={item.value} title={item.title} />
            ))}
          </Steps>
          <Steps value={val} status="dynamic">
            {data.map((item, index) => (
              <Step key={index} value={item.value} title={item.title} />
            ))}
          </Steps>
          <Steps value={val} status="enhanced">
            {data.map((item, index) => (
              <Step key={index} value={item.value} title={item.title} />
            ))}
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
