import React from 'react'
import { Button } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button openType="share" style={marginStyle}>
        Share
      </Button>
      <Button openType="openSetting" style={marginStyle}>
        打开授权设置页
      </Button>
    </>
  )
}
export default Demo1
