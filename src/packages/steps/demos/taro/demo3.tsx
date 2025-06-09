import React, { useState } from 'react'
import { Steps, Step, Button, Space, Cell } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const data = [
    {
      value: 1,
      title: '预约结束',
      description: '3月17日19:59截止',
    },
    {
      value: 2,
      title: '抢购开始',
      description: '3月21日21:59截止',
    },
    {
      value: 3,
      title: '抢购结束',
      description: '3月28日21:59截止',
    },
  ]
  const [val, setVal] = useState(2)
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
          <Steps value={2} status="default">
            {data.slice(0, 2).map((item, index) => (
              <Step
                key={index}
                value={item.value}
                title={item.title}
                description={item.description}
              />
            ))}
          </Steps>
          <Steps value={2} status="business">
            {data.slice(0, 2).map((item, index) => (
              <Step
                key={index}
                value={item.value}
                title={item.title}
                description={item.description}
              />
            ))}
          </Steps>
          <Steps value={2} status="dynamic">
            {data.slice(0, 2).map((item, index) => (
              <Step
                key={index}
                value={item.value}
                title={item.title}
                description={item.description}
              />
            ))}
          </Steps>
        </Space>
      </Cell>
      <Cell>
        <Space direction="vertical">
          <Steps value={val} status="default">
            {data.map((item, index) => (
              <Step
                key={index}
                value={item.value}
                title={item.title}
                description={item.description}
              />
            ))}
          </Steps>
          <Steps value={val} status="business">
            {data.map((item, index) => (
              <Step
                key={index}
                value={item.value}
                title={item.title}
                description={item.description}
              />
            ))}
          </Steps>
          <Steps value={val} status="dynamic">
            {data.map((item, index) => (
              <Step
                key={index}
                value={item.value}
                title={item.title}
                description={item.description}
              />
            ))}
          </Steps>
          <Steps value={val} status="enhanced" onStepClick={handleClickStep}>
            {data.map((item, index) => (
              <Step
                key={index}
                value={item.value}
                title={item.title}
                description={item.description}
              />
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
export default Demo3
