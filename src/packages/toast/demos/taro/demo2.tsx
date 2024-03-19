import React, { useState } from 'react'
import { Cell, Toast } from '@/packages/nutui.react.taro'
import { ToastWordBreakType } from '@/packages/toast/toast.taro'

const Demo2 = () => {
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
      <Toast
        content={state.content}
        visible={show}
        type="text"
        onClose={() => {
          setShow(false)
        }}
        wordBreak={state.wordBreak}
      />
      <Cell.Group>
        <Cell title="换行时截断单词" onClick={() => setShow(true)} />
        <Cell
          title="换行时不截断单词"
          onClick={() => {
            setState({
              content: `Let's try ABCDEFGHIJKLMN here.`,
              wordBreak: 'break-word',
            })
            setShow(true)
          }}
        />
      </Cell.Group>
    </>
  )
}
export default Demo2
