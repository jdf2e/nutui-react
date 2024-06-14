import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Range, Cell /* , Toast */ } from '@nutui/nutui-react-taro'
import { rn, harmony } from '@/utils/platform-taro'

let cellStyle = {
  padding: '40px 18px',
} as any

if (rn()) {
  cellStyle = {
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 18,
    paddingRight: 18,
  }
}

if (harmony()) {
  cellStyle = {
    paddingTop: '40PX',
    paddingBottom: '40PX',
    paddingLeft: '18PX',
    paddingRight: '18PX',
  }
}

const Demo4 = () => {
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
          defaultValue={[20, 80]}
          range
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
export default Demo4
