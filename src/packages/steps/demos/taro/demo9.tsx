import React, { useState } from 'react'
import { Steps, Step, Button, Cell, pxTransform } from '@nutui/nutui-react-taro'
import { Check, PickedUp, Service, WaitReceive } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'

const Demo9 = () => {
  const [value, setValue] = useState(2)
  const handleStep = () => {
    const newVal = (value % 3) + 1
    setValue(newVal)
  }

  const timeCustomStyle = {
    marginTop: pxTransform(2),
    color: '#808080',
    fontSize: pxTransform(12),
    lineHeight: 1.5,
  }

  return (
    <>
      <Cell>
        <Steps direction="vertical" value={value} type="icon" status="dynamic">
          <Step
            type="dot"
            value={1}
            description="自提地址：深圳市福田区福华路29号京东快递自提点"
          />
          <Step
            type="icon"
            value={2}
            title="待取件"
            description={
              <>
                <View>
                  你的订单已由【深圳市福田区福华路京东快递自
                  提点】上架完成，请上门自提
                </View>
                <View style={timeCustomStyle}>2025-01-20 07:12:30</View>
              </>
            }
            icon={<WaitReceive />}
          />
          <Step
            type="icon"
            value={3}
            title="运输中"
            description={
              <>
                <View>订单在【淮安分拣中心】完成分拣</View>
                <View style={timeCustomStyle}>2025-01-20 07:12:30</View>
              </>
            }
            icon={<PickedUp />}
          />
        </Steps>
      </Cell>
      <Cell>
        <Steps direction="vertical" value={value} type="icon" status="enhanced">
          <Step
            type="icon"
            value={3}
            title="待安装  工程师已接单"
            description={
              <>
                <View>已分配工程师 XXX 为您服务，联系电话 136 **** 8618</View>
                <View style={timeCustomStyle}>2025-01-20 07:12:30</View>
              </>
            }
            icon={<Service />}
          />
          <Step
            type="icon"
            value={2}
            title="已签收"
            description={
              <>
                <View>京东快递 · 您的订单派送完成，已由家人签收</View>
                <View style={timeCustomStyle}>2025-01-20 07:12:30</View>
              </>
            }
            icon={<Check />}
          />
          <Step
            type="dot"
            value={1}
            title="京东总部大厦B座"
            description="京小东 136 **** 8618"
          />
        </Steps>
      </Cell>
      <Button type="primary" size="small" onClick={handleStep}>
        下一步
      </Button>
    </>
  )
}
export default Demo9
