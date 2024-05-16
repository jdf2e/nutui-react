import React from 'react'
import { View } from '@tarojs/components'
import { Space, Button } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  return (
    <Space align="end" wrap>
      <Button>按钮1</Button>
      <View>
        <Button block style={{ marginBottom: 5 }}>
          按钮2
        </Button>
        <Button block>按钮2</Button>
      </View>
      <View>
        <Button block style={{ marginBottom: 5 }}>
          按钮3
        </Button>
        <Button block style={{ marginBottom: 5 }}>
          按钮3
        </Button>
        <Button block>按钮3</Button>
      </View>
    </Space>
  )
}
export default Demo6
