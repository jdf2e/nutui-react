import React from 'react'
import { Toast, Cell } from '@nutui/nutui-react'

const Demo4 = () => {
  const iconToast = (msg: string) => {
    Toast.show({
      content: msg,
      style: {
        '--nutui-overlay-bg-color': 'rgba(0, 0, 0, 0.7)',
      },
      closeOnOverlayClick: true,
      onClose: () => {
        console.log('closeToast')
      },
    })
  }
  return (
    <>
      <Cell
        title="加载状态透明遮罩"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => iconToast('加载状态透明遮罩')}
      />
    </>
  )
}
export default Demo4
