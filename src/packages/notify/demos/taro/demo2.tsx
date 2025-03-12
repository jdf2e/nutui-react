import React, { useState } from 'react'
import { Notify, Cell } from '@nutui/nutui-react-taro'
import { ArrowRight, NetworkError } from '@nutui/icons-react-taro'
import { navigateTo, redirectTo } from '@tarojs/taro'

const Demo2 = () => {
  const [showNotify, setShowNotify] = useState(false)
  const [content] = useState('网络请求失败，请检查您的网络设置')
  const onJumpclick = (link: string) => {
    const replace = false
    if (link) {
      replace ? redirectTo({ url: link }) : navigateTo({ url: link })
    }
  }
  return (
    <>
      <Notify
        visible={showNotify}
        leftIcon={<NetworkError />}
        rightIcon={<ArrowRight />}
        onClick={() => {
          onJumpclick('/pages/index/index')
        }}
        onClose={() => {
          setShowNotify(false)
        }}
      >
        {content}
      </Notify>
      <Cell
        title="支持跳转"
        onClick={() => {
          setShowNotify(true)
        }}
      />
    </>
  )
}
export default Demo2
