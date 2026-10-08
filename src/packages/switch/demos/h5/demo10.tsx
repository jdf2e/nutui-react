import React from 'react'
import { Cell, Switch, Toast } from '@nutui/nutui-react'

const Demo10 = () => {
  const onChangeAsync = async () => {
    Toast.show('正在请求接口...')
    await new Promise((resolve) => {
      setTimeout(resolve, 1500)
    })
    Toast.show('接口请求失败，取消切换并保持原状态')
    // 异步操作抛错，组件会自动退出 loading 态并中断状态翻转
    throw new Error('Request failed')
  }

  return (
    <Cell>
      <Switch defaultChecked={false} onChange={onChangeAsync} />
    </Cell>
  )
}
export default Demo10
