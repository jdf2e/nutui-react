import React from 'react'
import { Empty, Button } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'

const Demo6 = () => {
  return (
    <Empty status="error" description="加载失败">
      <View style={{ marginTop: pxTransform(10) }}>
        <Button type="primary" size="small">
          刷新重试
        </Button>
      </View>
    </Empty>
  )
}
export default Demo6
