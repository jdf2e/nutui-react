import React from 'react'
import { Notify, Cell } from '@nutui/nutui-react'
import { ArrowRight, NetworkError } from '@nutui/icons-react'

const Demo2 = () => {
  const baseNotify = (message: string) => {
    Notify.text(message, {
      leftIcon: <NetworkError />,
      rightIcon: <ArrowRight />,
      onClose: () => {
        console.log('close')
      },
      onClick: () => {
        const replace = false
        const url = 'https://jd.com'
        if (url) {
          replace ? window.location.replace(url) : (window.location.href = url)
        }
      },
    })
  }
  return (
    <>
      <Cell
        title="支持跳转"
        onClick={(event: React.MouseEvent) => {
          baseNotify('网络请求失败，请检查您的网络设置')
        }}
      />
    </>
  )
}
export default Demo2
