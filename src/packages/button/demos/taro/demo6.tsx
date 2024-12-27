import React from 'react'
import { Button, Cell } from '@nutui/nutui-react-taro'
import { harmony } from '@/utils/platform-taro'

const Demo6 = () => {
  const marginStyle = {
    width: harmony() ? 120 : 'auto',
    margin: 8,
  }
  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Button shape="square" type="primary" style={marginStyle}>
        Square Button
      </Button>
      <Button shape="round" type="primary" style={marginStyle}>
        Round Button
      </Button>
    </Cell>
  )
}
export default Demo6
