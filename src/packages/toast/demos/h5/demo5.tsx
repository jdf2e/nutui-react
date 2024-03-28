import React from 'react'
import { Toast, Cell, type ToastWordBreak } from '@nutui/nutui-react'

const Demo5 = () => {
  const showToast = (mode: ToastWordBreak) => {
    Toast.show({
      content: `Let's try ABCDEFGHIJKLMN here.`,
      wordBreak: mode,
    })
  }
  return (
    <Cell.Group>
      <Cell title="换行时截断单词" onClick={() => showToast('break-all')} />
      <Cell title="换行时不截断单词" onClick={() => showToast('break-word')} />
    </Cell.Group>
  )
}
export default Demo5
