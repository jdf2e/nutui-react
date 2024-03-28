import React, { useState } from 'react'
import { Jd } from '@nutui/icons-react-taro'
import { Cell, Toast, type ToastWordBreakType } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const [state, setState] = useState<{
    content: string
    wordBreak: ToastWordBreakType
  }>({
    content: `Let's try ABCDEFGHIJKLMN here.`,
    wordBreak: 'break-all',
  })
  const [show, setShow] = useState(false)
  return (
    <>
      <Cell
        title="函数调用"
        onClick={() => {
          Toast.show('test', {
            title: '函数调用',
            content: '函数调用',
            type: 'fail',
            duration: 2,
            position: 'center',
            icon: <Jd />,
            lockScroll: true,
            onClose: () => {
              console.log('close')
            },
          })
        }}
      />
    </>
  )
}
export default Demo5
