import React from 'react'
// @TODO 暂时使用 taro components 按钮替代展示
import { Button, View } from '@tarojs/components'
import { Space } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return (
    <Space justify="start" wrap>
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
export default Demo5
