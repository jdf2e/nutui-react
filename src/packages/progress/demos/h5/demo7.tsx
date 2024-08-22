import React, { useState } from 'react'
import { Progress, Cell, Button, Toast } from '@nutui/nutui-react'

const Demo7 = () => {
  const [value, setValue] = useState(0)
  return (
    <Cell.Group>
      <Cell align="center">
        <Progress percent={value} />
        <span style={{ margin: '0 5px' }}>{value}%</span>
      </Cell>
      <Cell align="center">
        <Button
          type="default"
          style={{ margin: 8 }}
          onClick={() => {
            if (value <= 0) {
              Toast.show('进度已为0')
            }
            setValue(Math.max(0, value - 10))
          }}
        >
          减少
        </Button>
        <Button
          type="primary"
          style={{ margin: 8 }}
          onClick={() => {
            if (value >= 100) {
              Toast.show('进度已为100%')
            }
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
