import React from 'react'
import { Empty } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo1 = () => {
  return (
    <>
      <Empty
        title="标题"
        description="无数据"
        actions={[{ text: '操作按钮' }, { text: '操作按钮', type: 'primary' }]}
      />
      <Empty
        description="无数据"
        actions={[{ text: '操作按钮' }]}
        style={{ marginTop: pxTransform(10) }}
      />
      <Empty description="无数据" style={{ marginTop: pxTransform(10) }} />
    </>
  )
}
export default Demo1
