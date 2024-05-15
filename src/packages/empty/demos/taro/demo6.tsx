import React from 'react'
import { Empty, Button } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo6 = () => {
  return (
    <Empty status="error" description="加载失败">
      <View style={{ marginTop: '10px' }}>
        <Button type="primary" size="small">
          重试
        </Button>
      </View>
    </Empty>
  )
}
export default Demo6
