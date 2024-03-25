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
        type="primary"
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
                  src="https://img12.360buyimg.com/imagetools/jfs/t1/232373/2/15010/432/65fab02fF99afdb71/0457cdfa268f92df.png"
                />
              )}
              {(status === 'canRelease' || status === 'refreshing') && (
                <img
                  alt=""
                  style={{ height: '26px', width: '36px' }}
                  src="https://img14.360buyimg.com/imagetools/jfs/t1/186707/25/42738/223/65fab272F0965554b/eae33de2f17909b8.png"
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
