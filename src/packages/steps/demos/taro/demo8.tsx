import React from 'react'
import { View } from '@tarojs/components'
import { Steps, Step } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo8 = () => {
  return (
    <View
      style={{
        height: pxTransform(300),
        paddingTop: pxTransform(15),
        paddingLeft: pxTransform(30),
        paddingRight: pxTransform(30),
      }}
    >
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
    </View>
  )
}
export default Demo8
