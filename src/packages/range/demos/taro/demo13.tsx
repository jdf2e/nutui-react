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
const verticalStyle = !rn()
  ? {
      height: '180px',
      padding: '10px',
    }
  : {
      height: 180,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
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
