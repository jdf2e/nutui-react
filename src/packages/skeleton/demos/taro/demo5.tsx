import {
  Avatar,
  Cell,
  Skeleton,
  Switch,
  pxTransform,
} from '@nutui/nutui-react-taro'
import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'

const Demo5 = () => {
  const [checked, setChecked] = useState(false)
  const changeStatus = (value: boolean) => {
    console.log(`触发了change事件，开关状态：${value}`)
    setChecked(value)
  }
  return (
    <>
      <Cell>
        <Switch
          onChange={(value, event) => changeStatus(value)}
          style={{ marginBottom: pxTransform(8) }}
        />
      </Cell>
      <Cell>
        <View style={{ width: '100%' }}>
          <View style={{ display: 'flex' }}>
            <Skeleton
              visible={checked}
              width={pxTransform(50)}
              height={pxTransform(50)}
              shape="circle"
            >
              <Avatar
                className="nut-skeleton-content-avatar"
                size="50"
                src="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
              />
            </Skeleton>
            <View style={{ flex: 1, marginLeft: pxTransform(8) }}>
              <Skeleton
                visible={checked}
                size="large"
                width="30%"
                style={{ marginBottom: pxTransform(8) }}
              >
                <View style={{ lineHeight: 1, height: pxTransform(16) }}>
                  NutUI-React
                </View>
              </Skeleton>
              <Skeleton visible={checked} size="small" rows={2}>
                <Text style={{ wordBreak: 'break-all' }}>
                  一套京东风格的轻量级移动端React组件库，提供丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
                </Text>
              </Skeleton>
            </View>
          </View>
        </View>
      </Cell>
    </>
  )
}
export default Demo5
