import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Range, Cell /* , Toast */ } from '@nutui/nutui-react-taro'
import { rn } from '@/utils/platform-taro'

const cellStyle = !rn()
  ? {
      padding: '40px 18px',
    }
  : {
      paddingTop: 40,
      paddingBottom: 40,
      paddingLeft: 18,
      paddingRight: 18,
    }

const Demo1 = () => {
  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState('')
  const showToast = (msg: string) => {
    setMsg(msg)
    setShow(true)
  }
  return (
    <View>
      <Cell style={cellStyle}>
        <Range defaultValue={40} onEnd={(val) => showToast(`${val}`)} />
      </Cell>
      <Cell style={cellStyle}>
        <Range
          defaultValue={40}
          marks={[
            { value: 0, label: 'start' },
            { value: 100, label: 'end' },
          ]}
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
export default Demo1
