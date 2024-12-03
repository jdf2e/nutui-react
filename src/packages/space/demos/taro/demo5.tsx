import React from 'react'
import { View } from '@tarojs/components'
import { Space, Button, Cell } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return (
    <Cell>
      <Space justify="start" wrap>
        <Button>按钮1</Button>
        <View>
          <Button style={{ marginBottom: 5 }}>按钮2</Button>
          <Button>按钮2</Button>
        </View>
        <View>
          <Button style={{ marginBottom: 5 }}>按钮3</Button>
          <Button style={{ marginBottom: 5 }}>按钮3</Button>
          <Button>按钮3</Button>
        </View>
      </Space>
    </Cell>
  )
}
export default Demo5
