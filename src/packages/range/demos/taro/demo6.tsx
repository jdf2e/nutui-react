import React, { useMemo, useState } from 'react'
import { View } from '@tarojs/components'
import { Range, Cell, pxTransform, harmony } from '@nutui/nutui-react-taro'

const Demo6 = () => {
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
          defaultValue={30}
          step={5}
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
export default Demo6
