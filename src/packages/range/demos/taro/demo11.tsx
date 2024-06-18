import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Range, Cell /* , Toast */ } from '@nutui/nutui-react-taro'
import { rn, harmony } from '@/utils/platform-taro'
import pxTransform from '@/utils/px-transform'

const cellStyle = {
  paddingTop: pxTransform(40),
  paddingBottom: pxTransform(40),
  paddingLeft: pxTransform(18),
  paddingRight: pxTransform(18),
}

let buttonNativeStyle = {} as any

if (rn()) {
  buttonNativeStyle = {
    transform: [
      { translateX: pxTransform(-13) },
      { translateY: pxTransform(3) },
    ],
  }
}

const Demo11 = () => {
  const [value, setValue] = useState(60)
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
                position: 'absolute',
                display: 'flex',
                width: pxTransform(26),
                backgroundColor: 'red',
                borderRadius: pxTransform(10),
                justifyContent: 'center',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                ...buttonNativeStyle,
              }}
            >
              <Text
                style={
                  harmony()
                    ? {
                        height: pxTransform(18),
                        color: 'white',
                        fontSize: pxTransform(10),
                        lineHeight: pxTransform(10),
                        textAlign: 'center',
                        paddingTop: pxTransform(4),
                        paddingBottom: pxTransform(4),
                      }
                    : {
                        color: 'white',
                        fontSize: pxTransform(10),
                        lineHeight: rn() ? pxTransform(18) : '18px',
                        textAlign: 'center',
                      }
                }
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
