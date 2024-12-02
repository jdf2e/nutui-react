import React from 'react'
import { Empty } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo1 = () => {
  return (
    <>
      <Empty
        title="全屏缺省标题"
        description="内容描述内容描述内容描述"
        actions={[{ text: '次要操作' }, { text: '主要操作', type: 'primary' }]}
      />
      <Empty
        description="内容描述内容描述内容描述"
        actions={[{ text: '操作按钮' }]}
        style={{ marginTop: pxTransform(10) }}
      />
      <Empty
        description="内容描述内容描述内容描述"
        style={{ marginTop: pxTransform(10) }}
      />
    </>
  )
}
export default Demo1
