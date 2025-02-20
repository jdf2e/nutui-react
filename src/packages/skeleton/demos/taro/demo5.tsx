import { Avatar, Cell, Skeleton, Switch } from '@nutui/nutui-react-taro'
import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { harmony } from '@/utils/platform-taro'

const Demo5 = () => {
  const [checked, setChecked] = useState(false)
  const changeStatus = (
    value: boolean,
    event: React.MouseEvent<Element, MouseEvent>
  ) => {
    console.log(`触发了change事件，开关状态：${value}`)
    setChecked(value)
  }
  return (
    <Cell>
      <View style={{ width: '100%' }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <Switch
            onChange={(value, event: any) => changeStatus(value, event)}
            style={{ marginBottom: 8 }}
          />
        </View>
        <Skeleton title animated avatar rows={3} visible={checked}>
          <View
            className="nut-skeleton-content"
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <Avatar
              className="nut-skeleton-content-avatar"
              style={{ marginRight: 20 }}
              size="50"
              src="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
            />
            <View className="nut-skeleton-content-line">
              <Text>NutUI-React</Text>
              <View
                style={{ marginTop: 10, width: harmony() ? '80%' : '100%' }}
              >
                一套京东风格的轻量级移动端React组件库，提供丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
              </View>
            </View>
          </View>
        </Skeleton>
      </View>
    </Cell>
  )
}
export default Demo5
