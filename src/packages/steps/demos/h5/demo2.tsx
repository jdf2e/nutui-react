import React, { useState } from 'react'
import { Steps, Step, Button, Space, Cell } from '@nutui/nutui-react'
import { Check } from '@nutui/icons-react'

const Demo2 = () => {
  const data = [
    {
      value: 1,
      title: '提交订单',
    },
    {
      value: 2,
      title: '处理中',
    },
    {
      value: 3,
      title: '申请退款',
    },
    {
      value: 4,
      title: '审批中',
    },
    {
      value: 5,
      title: '已退款',
    },
  ]
  const [val, setVal] = useState(2)
  const handleStep = () => {
    const newVal = (val % 5) + 1
    setVal(newVal)
  }
  return (
    <Space direction="vertical">
      <Cell>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Steps value={2} status="business" type="dot" layout="double">
            {data.slice(0, 3).map((item, index) => (
              <Step key={index} value={item.value} title={item.title} />
            ))}
          </Steps>
          <Steps value={2} status="dynamic" type="dot" layout="double">
            {data.slice(0, 4).map((item, index) => (
              <Step key={index} value={item.value} title={item.title} />
            ))}
          </Steps>
          <Steps value={val} status="enhanced" type="dot" layout="double">
            {data.map((item, index) => (
              <Step key={index} value={item.value} title={item.title} />
            ))}
          </Steps>
        </Space>
      </Cell>
      <Cell>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Steps
            value={2}
            status="business"
            type="icon"
            layout="double"
            icon={<Check />}
          >
            {data.slice(0, 3).map((item, index) => (
              <Step key={index} value={item.value} title={item.title} />
            ))}
          </Steps>
          <Steps
            value={2}
            status="dynamic"
            type="icon"
            layout="double"
            icon={<Check />}
          >
            {data.slice(0, 4).map((item, index) => (
              <Step key={index} value={item.value} title={item.title} />
            ))}
          </Steps>

          <Steps value={val} status="enhanced" type="icon" layout="double">
            {data.map((item, index) => (
              <Step
                key={index}
                value={item.value}
                title={item.title}
                icon={<Check />}
              />
            ))}
          </Steps>
        </Space>
      </Cell>
      <Cell>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Steps value={2} status="business" layout="double">
            {data.slice(0, 3).map((item, index) => (
              <Step key={index} value={item.value} title={item.title} />
            ))}
          </Steps>
          <Steps value={2} status="dynamic" layout="double">
            {data.slice(0, 4).map((item, index) => (
              <Step key={index} value={item.value} title={item.title} />
            ))}
          </Steps>
          <Steps value={val} status="enhanced" layout="double">
            {data.map((item, index) => (
              <Step key={index} value={item.value} title={item.title} />
            ))}
          </Steps>
        </Space>
      </Cell>

      <Button size="small" type="danger" onClick={() => handleStep()}>
        下一步
      </Button>
    </Space>
  )
}
export default Demo2
