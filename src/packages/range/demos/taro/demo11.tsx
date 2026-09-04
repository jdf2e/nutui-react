import React, { useMemo, useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Range, Cell, harmony, pxTransform } from '@nutui/nutui-react-taro'

const Demo11 = () => {
  const cellStyle = useMemo(() => {
    return harmony()
      ? {
          paddingTop: pxTransform(40),
          paddingBottom: pxTransform(40),
          paddingLeft: pxTransform(18),
          paddingRight: pxTransform(18),
        }
      : {
          padding: '40px 18px',
        }
  }, [])

  const buttonNativeStyle = useMemo(() => {
    return {}
  }, [])
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
                minWidth: pxTransform(36),
                padding: `0 ${pxTransform(6)}`,
                height: pxTransform(20),
                border: '1px solid var(--nutui-color-background-overlay,#fff)',
                backgroundColor: 'red',
                borderRadius: pxTransform(10),
                boxShadow:
                  '0 1px 10px 0 rgba(0, 0, 0, 0.05), 0 4px 5px 0 rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.12)',
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
                        fontSize: pxTransform(12),
                        lineHeight: 1,
                        textAlign: 'center',
                        paddingTop: pxTransform(4),
                        paddingBottom: pxTransform(4),
                      }
                    : {
                        color: 'white',
                        fontSize: pxTransform(12),
                        lineHeight: pxTransform(18),
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
