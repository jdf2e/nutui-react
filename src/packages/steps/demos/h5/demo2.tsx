import React, { useState } from 'react'
import { Steps, Step, Button, Space, Cell } from '@nutui/nutui-react'
import { Check, Location } from '@nutui/icons-react'

const Demo2 = () => {
  const [val, setVal] = useState(2)
  const handleStep = () => {
    const newVal = (val % 5) + 1
    setVal(newVal)
  }
  return (
    <Space direction="vertical">
      <Cell>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Steps value={2} status="default" type="dot" layout="double">
            <Step value={1} title="申请退款" />
            <Step value={2} title="财务审批" />
            <Step value={3} title="完成退款" />
          </Steps>
          <Steps value={2} status="dynamic" type="dot" layout="double">
            <Step value={1} title="申请退款" />
            <Step value={2} title="处理中" />
            <Step value={3} title="财务审批" />
            <Step value={4} title="已退款" />
          </Steps>
          <Steps value={val} status="enhanced" type="dot" layout="double">
            <Step value={1} title="申请退款" />
            <Step value={2} title="处理中" />
            <Step value={3} title="财务审批" />
            <Step value={4} title="审批中" />
            <Step value={5} title="已退款" />
          </Steps>
        </Space>
      </Cell>
      <Cell>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Steps
            value={2}
            status="dynamic"
            type="icon"
            layout="double"
            icon={<Location />}
          >
            <Step value={1} title="澳大利亚" />
            <Step value={2} title="京东厦门保税仓" />
            <Step value={4} title="北京市" />
          </Steps>
          <Steps
            value={2}
            status="dynamic"
            type="icon"
            layout="double"
            icon={<Check />}
          >
            <Step value={1} title="订单提交" />
            <Step value={2} title="处理中" />
            <Step value={3} title="订单完成" />
            <Step value={3} title="开票成功" />
          </Steps>

          <Steps value={val} status="enhanced" type="icon" layout="double">
            <Step value={1} title="订单提交" icon={<Location />} />
            <Step value={2} title="处理中" icon={<Location />} />
            <Step value={3} title="已出库" icon={<Location />} />
            <Step value={4} title="已送达" icon={<Location />} />
            <Step value={5} title="开票成功" icon={<Location />} />
          </Steps>
        </Space>
      </Cell>
      <Cell>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Steps value={2} status="enhanced" layout="double">
            <Step value={1} title="订单提交" />
            <Step value={2} title="订单完成" />
            <Step value={3} title="开票成功" />
          </Steps>
          <Steps value={2} status="dynamic" layout="double">
            <Step value={1} title="订单提交" />
            <Step value={2} title="处理中" />
            <Step value={3} title="已出库" />
            <Step value={4} title="已送达" />
          </Steps>
          <Steps value={val} status="enhanced" layout="double">
            <Step value={1} title="订单提交" icon={<Location />} />
            <Step value={2} title="处理中" icon={<Location />} />
            <Step value={3} title="已出库" icon={<Location />} />
            <Step value={4} title="已送达" icon={<Location />} />
            <Step value={5} title="开票成功" icon={<Location />} />
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
