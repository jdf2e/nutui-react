import React from 'react'
import { View } from '@tarojs/components'
import { VerticalSteps, Step } from '@nutui/nutui-react-taro'
import { Service, People, Checklist } from '@nutui/icons-react-taro'

const Demo3 = () => {
  return (
    <View style={{ height: '300px', padding: '15px 30px 0' }}>
      <VerticalSteps value={1}>
        <Step
          value={1}
          title="已完成"
          description="您的订单已经打包完成，商品已发出"
          icon={<Service width={14} height={14} />}
        />
        <Step
          value={2}
          title="进行中"
          description="您的订单正在配送途中"
          icon={<People width={14} height={14} />}
        />
        <Step
          value={3}
          title="未开始"
          description="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"
          icon={<Checklist width={14} height={14} />}
        />
      </VerticalSteps>
    </View>
  )
}
export default Demo3
