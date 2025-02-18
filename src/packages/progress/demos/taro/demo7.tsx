import React, { useState } from 'react'
import { Cell, Button, Toast, Progress } from '@nutui/nutui-react-taro'
import { Text } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'
import { harmony } from '@/utils/platform-taro'

const Demo7 = () => {
  const [value, setValue] = useState(0)
  const [show, setShow] = useState(false)
  const [toastMsg, setToastMsg] = useState('')
  return (
    <Cell.Group>
      {!harmony() && (
        <Toast
          type="text"
          visible={show}
          content={toastMsg}
          onClose={() => {
            setShow(false)
          }}
        />
      )}

      <Cell align="center">
        <Progress percent={value} />
      </Cell>
      <Cell align="center">
        <Button
          type="default"
          style={{ marginRight: pxTransform(16) }}
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
        <Text style={{ marginLeft: pxTransform(16) }}>{value}%</Text>
      </Cell>
    </Cell.Group>
  )
}
export default Demo7
