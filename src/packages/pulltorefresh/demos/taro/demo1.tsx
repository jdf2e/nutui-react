import React, { useState } from 'react'
import { PullToRefresh, Toast } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const [list] = useState([1, 2, 3, 4, 5, 6, 7])
  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')
  const toastShow = (msg: any) => {
    SetToastMsg(msg)
    SetShow(true)
  }
  return (
    <>
      <PullToRefresh
        style={{
          backgroundColor: `var(--nutui-gray-3)`,
          color: 'var(--nutui-gray-7)',
        }}
        onRefresh={() =>
          new Promise((resolve) => {
            toastShow('😊')
            resolve('done')
          })
        }
      >
        {list.map((item) => (
          <div
            style={{
              textAlign: 'center',
              height: '50px',
              lineHeight: '50px',
            }}
            key={item}
          >
            {item}
          </div>
        ))}
      </PullToRefresh>
      <Toast
        type="text"
        visible={show}
        content={toastMsg}
        onClose={() => {
          SetShow(false)
        }}
      />
    </>
  )
}

export default Demo1
