import React from 'react'
import { Avatar, Cell } from '@nutui/nutui-react-taro'

const Demo10 = () => {
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  return (
    <Cell>
      <Avatar src={src} mode="scaleToFill" style={{ marginRight: 10 }} />
      <Avatar src={src} mode="aspectFit" style={{ marginRight: 10 }} />
      <Avatar src={src} mode="aspectFill" style={{ marginRight: 10 }} />
      <Avatar src={src} mode="widthFix" />
    </Cell>
  )
}
export default Demo10
