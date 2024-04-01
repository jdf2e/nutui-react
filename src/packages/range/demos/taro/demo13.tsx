import React, { useState } from 'react'
import { Range, Cell, Toast } from '@nutui/nutui-react-taro'

const Demo13 = () => {
  const [marks] = useState({
    0: 'Start',
    20: 20,
    40: 40,
    60: 60,
    80: 80,
    100: 'End',
  })
  const cellStyle = {
    padding: '40px 18px',
  }
  const verticalStyle = {
    height: '180px',
    padding: '10px',
  }
  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState('')
  const showToast = (msg: string) => {
    setMsg(msg)
    setShow(true)
  }
  return (
    <>
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
        />
        <Range
          defaultValue={[20, 80]}
          vertical
          marks={marks}
          range
          onEnd={(val) => showToast(`${val}`)}
        />
      </Cell>
      <Toast
        type="text"
        visible={show}
        content={msg}
        onClose={() => {
          setShow(false)
        }}
      />
    </>
  )
}
export default Demo13
