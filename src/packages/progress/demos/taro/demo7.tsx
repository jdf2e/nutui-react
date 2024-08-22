import React, { useState } from 'react'
import { Progress, Cell, Button, Toast } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const [value, setValue] = useState(0)
  const [show, setShow] = useState(false)
  const [toastMsg, setToastMsg] = useState('')
  return (
    <Cell.Group>
      <Toast
        type="text"
        visible={show}
        content={toastMsg}
        onClose={() => {
          setShow(false)
        }}
      />
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
              setToastMsg('进度已为0')
              setShow(true)
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
              setToastMsg('进度已为100%')
              setShow(true)
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
