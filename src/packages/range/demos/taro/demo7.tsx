import React, { useState } from 'react'
import { Range, Cell, Toast } from '@nutui/nutui-react-taro'

const Demo7 = () => {
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
          defaultValue={30}
          maxDescription={null}
          minDescription={null}
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
export default Demo7
