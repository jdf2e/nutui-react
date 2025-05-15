import React from 'react'
import { Button, Cell, harmony } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const marginStyle = {
    width: harmony() ? 120 : 'auto',
    margin: 8,
  }

  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Button size="mini" style={marginStyle} type="primary">
        Mini
      </Button>
      <Button size="small" style={marginStyle} type="primary">
        Small
      </Button>
      <Button type="primary" style={marginStyle}>
        Normal
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
