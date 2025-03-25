import React, { useState } from 'react'
import { FixedNav } from '@nutui/nutui-react-taro'
import { Retweet } from '@nutui/icons-react-taro'
import { View, Text } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'

const Demo4 = () => {
  const [visible, setVisible] = useState(false)
  const change = (value: boolean) => {
    setVisible(value)
  }
  const selected = (
    item: any,
    event: React.MouseEvent<Element, MouseEvent>
  ) => {
    console.log(item, event)
  }
  return (
    <>
      <FixedNav
        position={{ top: pxTransform(280) }}
        type="left"
        visible={visible}
        onChange={change}
        onSelect={selected}
        content={
          <>
            <Retweet color="#fff" />
            <Text className="text">{visible ? '自定义开' : '自定义关'}</Text>
          </>
        }
      >
        <View className="nut-fixednav-list">
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <View className="nut-fixednav-list-item" key={item}>
                {item}
              </View>
            )
          })}
        </View>
      </FixedNav>
    </>
  )
}
export default Demo4
