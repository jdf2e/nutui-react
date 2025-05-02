import React, { useState } from 'react'
import { Steps, Step, Cell, Space, Button } from '@nutui/nutui-react'
import { Location } from '@nutui/icons-react'

const Demo7 = () => {
  const data = [
    {
      value: 1,
      title: '美国',
      icon: <Location />,
    },
    {
      value: 2,
      title: '保税仓',
      icon: <Location />,
    },
    {
      value: 3,
      title: '北京市',
      icon: <Location />,
    },
    {
      value: 4,
      title: '分拣中心',
      icon: <Location />,
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
          <Steps value={2} type="icon">
            {data.slice(0, 2).map((item, index) => (
              <Step
                key={index}
                value={item.value}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </Steps>
          <Steps value={2} type="icon" status="business">
            {data.slice(0, 3).map((item, index) => (
              <Step
                key={index}
                value={item.value}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </Steps>
          <Steps value={val} type="icon" status="dynamic">
            {data.map((item, index) => (
              <Step
                key={index}
                value={item.value}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </Steps>
          <Steps value={val} type="icon" status="enhanced">
            {data.map((item, index) => (
              <Step
                key={index}
                value={item.value}
                title={item.title}
                icon={item.icon}
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
export default Demo7
