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
        renderIcon={(status) => {
          return (
            <>
              {(status === 'pulling' || status === 'complete') && (
                <img
                  alt=""
                  style={{ height: '26px', width: '36px' }}
                  src="https://img13.360buyimg.com/imagetools/jfs/t1/219180/19/37902/438/65fa8cbbF5278d022/5eabe69b64bba791.png"
                />
              )}
              {(status === 'canRelease' || status === 'refreshing') && (
                <img
                  alt=""
                  style={{ height: '26px', width: '36px' }}
                  src="https://img10.360buyimg.com/imagetools/jfs/t1/230454/20/14523/223/65fab2d1F379c3968/ac35992443abab0c.png"
                />
              )}
            </>
          )
        }}
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
