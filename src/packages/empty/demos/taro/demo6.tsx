import React from 'react'
import { Button, Cell, Empty, pxTransform } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo6 = () => {
  return (
    <Cell>
      <Empty description="加载失败">
        <View style={{ marginTop: pxTransform(10) }}>
          <Button type="primary" size="small">
            刷新重试
          </Button>
        </View>
      </Empty>
    </Cell>
  )
}
export default Demo6
