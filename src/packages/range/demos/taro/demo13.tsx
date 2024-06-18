import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Range, Cell /* , Toast */ } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const cellStyle = {
  paddingTop: pxTransform(40),
  paddingBottom: pxTransform(40),
  paddingLeft: pxTransform(18),
  paddingRight: pxTransform(18),
}
const verticalStyle = {
  height: pxTransform(180),
  paddingTop: pxTransform(10),
  paddingBottom: pxTransform(10),
  paddingLeft: pxTransform(10),
  paddingRight: pxTransform(10),
}

const Demo13 = () => {
  const [marks] = useState({
    0: 'Start',
    20: 20,
    40: 40,
    60: 60,
    80: 80,
    100: 'End',
  })
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
          defaultValue={60}
          maxDescription={null}
          minDescription={null}
          marks={marks}
          onEnd={(val) => showToast(`${val}`)}
        />
      </Cell>
      <Cell style={cellStyle}>
        <Range
          defaultValue={[20, 80]}
          marks={marks}
          range
          onEnd={(val) => showToast(`${val}`)}
        />
      </Cell>
      <Cell style={verticalStyle}>
        <Range
          defaultValue={60}
          vertical
          maxDescription={null}
          minDescription={null}
          marks={marks}
          onEnd={(val) => showToast(`${val}`)}
          style={{ flex: 1 }}
        />
        <Range
          defaultValue={[20, 80]}
          vertical
          marks={marks}
          range
          onEnd={(val) => showToast(`${val}`)}
          style={{ flex: 1 }}
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
export default Demo13
