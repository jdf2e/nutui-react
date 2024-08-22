import React from 'react'
import { Notify, Cell } from '@nutui/nutui-react'

const Demo3 = () => {
  const cusBgNotify = (message: string) => {
    Notify.text(message, {
      style: {
        '--nutui-notify-text-color': '#ad0000',
        '--nutui-notify-base-background-color': '#ffe1e1',
      },
    })
  }
  return (
    <>
      <Cell
        title="自定义背景色和字体颜色"
        onClick={(event: React.MouseEvent) => {
          cusBgNotify('自定义背景色和字体颜色')
        }}
      />
    </>
  )
}
export default Demo3
