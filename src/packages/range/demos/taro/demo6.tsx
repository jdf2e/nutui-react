import React, { useMemo, useState } from 'react'
import { View } from '@tarojs/components'
import { Range, Cell /* , Toast */ } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo6 = () => {
  const cellStyle = useMemo(
    () => ({
      paddingTop: pxTransform(40),
      paddingBottom: pxTransform(40),
      paddingLeft: pxTransform(18),
      paddingRight: pxTransform(18),
    }),
    []
  )
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
