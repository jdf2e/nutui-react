import React from 'react'
import { Toast, Cell } from '@nutui/nutui-react'

const Demo6 = () => {
  const loadingToast = (msg: string) => {
    Toast.show({
      content: msg,
      icon: 'loading',
    })
  }
  return (
    <>
      <Cell
        title="加载提示"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => loadingToast('加载提示')}
      />
    </>
  )
}
export default Demo6
