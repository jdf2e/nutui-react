import React from 'react'
import { Button, Cell } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const marginStyle = { margin: '8px' }
  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Button openType="share" style={marginStyle}>
        Share
      </Button>
      <Button openType="openSetting" style={marginStyle}>
        打开授权设置页
      </Button>
    </Cell>
  )
}
export default Demo1
