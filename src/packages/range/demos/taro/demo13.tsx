import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Range, Cell /* , Toast */ } from '@nutui/nutui-react-taro'
import { rn, harmony } from '@/utils/platform-taro'
import pxTransform from '@/utils/px-transform'

let cellStyle = {
  padding: '40px 18px',
} as any
let verticalStyle = {
  height: '180px',
  padding: '10px',
} as any

if (rn()) {
  cellStyle = {
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 18,
    paddingRight: 18,
  }
  verticalStyle = {
    height: 180,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  }
}

if (harmony()) {
  cellStyle = {
    paddingTop: '40PX',
    paddingBottom: '40PX',
    paddingLeft: '18PX',
    paddingRight: '18PX',
  }
  verticalStyle = {
    height: pxTransform(180),
    paddingTop: pxTransform(10),
    paddingBottom: pxTransform(10),
    paddingLeft: pxTransform(10),
    paddingRight: pxTransform(10),
  }
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
