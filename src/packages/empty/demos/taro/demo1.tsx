import React from 'react'
import { Empty } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <>
      <Empty
        title="标题"
        description="无数据"
        actions={[{ text: '操作按钮' }, { text: '操作按钮' }]}
      />
      <Empty
        description="无数据"
        actions={[{ text: '操作按钮' }]}
        style={{ marginTop: '10px' }}
      />
      <Empty description="无数据" style={{ marginTop: '10px' }} />
    </>
  )
}
export default Demo1
