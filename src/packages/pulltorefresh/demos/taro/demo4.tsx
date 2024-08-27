import React, { useState } from 'react'
import { ScrollView } from '@tarojs/components'
import { PullToRefresh, Cell, Toast } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const [list] = useState([1, 2, 3, 4, 5, 6, 7])
  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')
  const toastShow = (msg: any) => {
    SetToastMsg(msg)
    SetShow(true)
  }
  const [scrollTop, setScrollTop] = useState(0)
  return (
    <>
      <ScrollView
        style={{ height: '150px' }}
        scrollY
        onScrollEnd={(e) => {
          // scrollTop > 0, PullToRefresh 不触发 touchmove 事件。
          if (e.detail?.scrollTop) {
            setScrollTop(e.detail?.scrollTop)
          }
        }}
      >
        <PullToRefresh
          scrollTop={scrollTop}
          onRefresh={() =>
            new Promise((resolve) => {
              toastShow('😊')
              resolve('done')
            })
          }
          disabled
        >
          {list.map((item) => (
            <Cell key={item}>{item}</Cell>
          ))}
        </PullToRefresh>
      </ScrollView>
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

export default Demo4
