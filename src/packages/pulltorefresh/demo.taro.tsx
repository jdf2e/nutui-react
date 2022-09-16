import React, { useState } from 'react'
import { PullToRefresh, Cell, Toast } from '@/packages/nutui.react.taro'

const PullToRefreshDemo = () => {
  const [list] = useState([1, 2, 3, 4, 5, 6, 7])
  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')
  const toastShow = (msg: any) => {
    SetToastMsg(msg)
    SetShow(true)
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <PullToRefresh
          onRefresh={() =>
            new Promise((resolve) => {
              //   Toast.text('😊')
              toastShow('😊')
              resolve('done')
            })
          }
        >
          {list.map((item) => (
            <Cell key={item}>{item}</Cell>
          ))}
        </PullToRefresh>
        <Toast
          type="text"
          visible={show}
          msg={toastMsg}
          onClose={() => {
            SetShow(false)
          }}
        />
      </div>
    </>
  )
}

export default PullToRefreshDemo
