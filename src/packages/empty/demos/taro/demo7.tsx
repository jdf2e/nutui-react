import React from 'react'
import { Empty, Toast } from '@nutui/nutui-react'

const Demo7 = () => {
  return (
    <Empty
      status="error"
      description="加载失败"
      style={{ marginBottom: '20px' }}
      actions={[
        {
          text: 'Action',
          type: 'info',
          onClick: () => {
            Toast.show({ title: 'Action Click!' })
          },
        },
      ]}
    />
  )
}
export default Demo7
