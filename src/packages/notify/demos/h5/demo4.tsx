import React from 'react'
import { Notify, Cell } from '@nutui/nutui-react'
import { Reload } from '@nutui/icons-react'

const Demo4 = () => {
  const cusBgNotify = (message: string) => {
    Notify.text(message, {
      style: {
        '--nutui-notify-text-color': '#FFFFFF',
        '--nutui-notify-background-color': '#ff0f23',
      },
      leftIcon: <Reload color="#FFFFFF" />,
    })
  }
  return (
    <>
      <Cell
        title="自定义样式"
        onClick={(event: React.MouseEvent) => {
          cusBgNotify('自定义背景色和字体颜色')
        }}
      />
    </>
  )
}
export default Demo4
