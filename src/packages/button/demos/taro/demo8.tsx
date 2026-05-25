import React from 'react'
import { Button, Cell, harmony } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const marginStyle = {
    width: harmony() ? 120 : 'auto',
    margin: 8,
  }

  return (
    <Cell style={{ flexWrap: 'wrap', alignItems: 'center' }}>
      <Button
        size="48"
        type="primary"
        style={marginStyle}
        description="描述文本"
      >
        48
      </Button>
      <Button
        size="44"
        type="primary"
        style={marginStyle}
        description="描述文本"
      >
        44
      </Button>
      <Button size="40" type="primary" style={marginStyle}>
        40
      </Button>
      <Button size="36" type="primary" style={marginStyle}>
        36
      </Button>
      <Button size="32" type="primary" style={marginStyle}>
        32
      </Button>
      <Button size="28" type="primary" style={marginStyle}>
        28
      </Button>
      <Button size="24" type="primary" style={marginStyle}>
        24
      </Button>
    </Cell>
  )
}
export default Demo8
