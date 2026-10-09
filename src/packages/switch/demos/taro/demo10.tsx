import React, { useState } from 'react'
import { Cell, Switch, Toast } from '@nutui/nutui-react-taro'

const Demo10 = () => {
  const [showToast, setShowToast] = useState(false)
  const [toastContent, setToastContent] = useState('')

  const onChangeAsync = async () => {
    setToastContent('正在请求接口...')
    setShowToast(true)
    await new Promise((resolve) => {
      setTimeout(resolve, 1500)
    })
    setToastContent('接口请求失败，取消切换并保持原状态')
    setShowToast(true)
    // 异步操作抛错，组件会自动退出 loading 态并中断状态翻转
    throw new Error('Request failed')
  }

  return (
    <>
      <Cell>
        <Switch defaultChecked={false} onChange={onChangeAsync} />
      </Cell>
      <Toast
        content={toastContent}
        visible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  )
}
export default Demo10
