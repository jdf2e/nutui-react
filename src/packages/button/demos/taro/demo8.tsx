import React from 'react'
import { Button, Cell } from '@nutui/nutui-react-taro'
import { harmony } from '@/utils/platform-taro'

const Demo8 = () => {
  const marginStyle = {
    width: harmony() ? 120 : 'auto',
    margin: 8,
  }

  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Button type="primary" style={marginStyle}>
        Normal
      </Button>
      <Button style={marginStyle}>Normal</Button>
      <Button size="small" style={marginStyle} type="primary">
        Small
      </Button>
      <Button size="mini" style={marginStyle} type="primary">
        Mini
      </Button>
      <Button size="large" type="primary" style={marginStyle}>
        Large
      </Button>
      <Button size="xlarge" type="primary" style={marginStyle}>
        XLarge
      </Button>
    </Cell>
  )
}
export default Demo8
