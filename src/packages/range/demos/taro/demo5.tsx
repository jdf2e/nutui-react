import React, { useState } from 'react'
import { Range, Cell, Toast } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const cellStyle = {
    padding: '40px 18px',
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
          defaultValue={0}
          max={10}
          min={-10}
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
export default Demo5
