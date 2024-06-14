import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Range, Cell /* , Toast */ } from '@nutui/nutui-react-taro'
import { rn, harmony } from '@/utils/platform-taro'
import pxTransform from '@/utils/px-transform'

let verticalStyle = {
  height: '180px',
  padding: '10px',
} as any
let viewStyle = { width: '150px', height: '100%' } as any

if (rn()) {
  verticalStyle = {
    height: 180,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  }
  viewStyle = { width: 150, height: '100%' }
}

if (harmony()) {
  verticalStyle = {
    height: pxTransform(180),
    paddingTop: pxTransform(10),
    paddingBottom: pxTransform(10),
    paddingLeft: pxTransform(10),
    paddingRight: pxTransform(10),
  }
  viewStyle = { width: pxTransform(150), height: '100%' }
}

const Demo12 = () => {
  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState('')
  const showToast = (msg: string) => {
    setMsg(msg)
    setShow(true)
  }
  return (
    <View>
      <Cell style={verticalStyle}>
        <View style={viewStyle}>
          <Range
            defaultValue={20}
            vertical
            onEnd={(val) => showToast(`${val}`)}
          />
        </View>
        <View style={viewStyle}>
          <Range
            defaultValue={[20, 80]}
            vertical
            range
            onEnd={(val) => showToast(`${val}`)}
          />
        </View>
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
export default Demo12
