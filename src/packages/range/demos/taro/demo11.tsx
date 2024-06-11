import React, { useState } from 'react'
import { pxTransform } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { Range, Cell /* , Toast */ } from '@nutui/nutui-react-taro'

const Demo11 = () => {
  const [value, setValue] = useState(60)
  const cellStyle = {
    padding: '40px 18px',
  }
  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState('')
  const showToast = (msg: string) => {
    setMsg(msg)
    setShow(true)
  }
  return (
    <View>
      <Cell style={cellStyle}>
        <Range
          value={value}
          button={
            <View
              style={{
                display: 'flex',
                width: pxTransform(26),
                backgroundColor: 'red',
                borderRadius: pxTransform(10),
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: pxTransform(10),
                  lineHeight: pxTransform(18),
                  textAlign: 'center',
                }}
              >
                {value}
              </Text>
            </View>
          }
          onChange={(val: any) => setValue(val)}
          onEnd={(val) => showToast(`${val}`)}
        />
      </Cell>
      {/* <Toast
        type="text"
        visible={show}
        content={msg}
        onClose={() => {
          setShow(false)
        }}
      /> */}
    </View>
  )
}
export default Demo11
