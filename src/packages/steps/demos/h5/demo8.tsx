import React from 'react'
import { Steps, Step } from '@nutui/nutui-react'

const Demo8 = () => {
  return (
    <div style={{ height: '300px', padding: '15px 30px' }}>
      <Steps direction="vertical" value={2}>
        <Step
          value={1}
          title="已完成"
          description="您的订单已经打包完成，商品已发出"
        />
        <Step value={2} title="进行中" description="您的订单正在配送途中" />
        <Step
          value={3}
          title="未开始"
          description="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"
        />
      </Steps>
    </div>
  )
}
export default Demo8
