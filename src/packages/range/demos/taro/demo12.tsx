import React, { useState } from 'react'
import { Range, Cell, Toast } from '@nutui/nutui-react-taro'

const Demo12 = () => {
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
      <Cell style={verticalStyle}>
        <div style={{ width: '150px', height: '100%' }}>
          <Range
            defaultValue={20}
            vertical
            onEnd={(val) => showToast(`${val}`)}
          />
        </div>
        <div style={{ width: '150px', height: '100%' }}>
          <Range
            defaultValue={[20, 80]}
            vertical
            range
            onEnd={(val) => showToast(`${val}`)}
          />
        </div>
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
export default Demo12
