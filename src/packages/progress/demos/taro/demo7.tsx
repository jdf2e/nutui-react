import React, { useState } from 'react'
import { Cell, Button, Toast, Progress } from '@nutui/nutui-react-taro'
import { View, Text } from '@tarojs/components'
import Taro, { pxTransform } from '@tarojs/taro'

const Demo7 = () => {
  const [value, setValue] = useState(0)
  const [show, setShow] = useState(false)
  const [toastMsg, setToastMsg] = useState('')
  return (
    <Cell.Group>
      {!['HARMONY', 'RN'].includes(Taro.getEnv()) && (
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
        <View style={{ width: '90%', marginRight: pxTransform(5) }}>
          <Progress percent={value} />
        </View>
        <Text>{value}%</Text>
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
      </Cell>
    </Cell.Group>
  )
}
export default Demo7
