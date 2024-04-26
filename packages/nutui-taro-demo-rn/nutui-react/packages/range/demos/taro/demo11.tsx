import React, { useState } from 'react'
import { Range, Cell, Toast } from '@nutui/nutui-react-taro'

const Demo11 = () => {
  const [value, setValue] = useState(60)
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
          value={value}
          button={
            <div
              style={{
                width: '26px',
                color: 'white',
                fontSize: '10px',
                lineHeight: '18px',
                textAlign: 'center',
                backgroundColor: 'red',
                borderRadius: '10px',
              }}
            >
              {value}
            </div>
          }
          onChange={(val: any) => setValue(val)}
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
export default Demo11
