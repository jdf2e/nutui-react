import React, { useState } from 'react'
import { Cell, Button, Progress, pxTransform } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const [value, setValue] = useState(0)
  return (
    <Cell.Group>
      <Cell align="center" style={{ flexWrap: 'wrap' }}>
        <Progress
          percent={value}
          duration={800}
          style={{ marginBottom: 10 }}
          activeMode="forwards"
        />
        <Progress percent={value} activeMode="backwards" />
      </Cell>
      <Cell align="center">
        <Button
          type="default"
          style={{ marginRight: pxTransform(16) }}
          onClick={() => {
            setValue(Math.max(0, value - 10))
          }}
        >
          减少
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setValue(Math.min(100, value + 10))
          }}
        >
          增加
        </Button>
      </Cell>
    </Cell.Group>
  )
}
export default Demo7
