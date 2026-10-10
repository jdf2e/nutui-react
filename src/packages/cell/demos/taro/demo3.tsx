import React from 'react'
import { Text, View } from '@tarojs/components'
import { Cell, Checkbox, pxTransform } from '@nutui/nutui-react-taro'
import { ConfigI, TipsI } from '@nutui/icons-react-taro'

const Demo3 = () => {
  const titleNode = (
    <View
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <Text>标题文案</Text>
      <TipsI size={pxTransform(12)} style={{ marginLeft: pxTransform(4) }} />
    </View>
  )

  const descriptionNode = (
    <View>
      <View
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <Text>二级信息</Text>
        <TipsI size={pxTransform(12)} style={{ marginLeft: pxTransform(4) }} />
      </View>
    </View>
  )

  return (
    <Cell
      leading={<ConfigI />}
      title={titleNode}
      description={descriptionNode}
      extra={
        <Checkbox
          style={{ marginRight: 'calc(-8px * var(--nut-scale-f, 1))' }}
        />
      }
    />
  )
}
export default Demo3
