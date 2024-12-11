import React from 'react'
import { Empty, Toast } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  return (
    <>
      <Toast id="toast-empty" />
      <Empty
        status="error"
        description="加载失败"
        style={{ marginBottom: '20px' }}
        actions={[
          {
            text: 'Action',
            type: 'info',
            onClick: () => {
              Toast.show('toast-empty', { title: 'Action Click!' })
            },
          },
        ]}
      />
    </>
  )
}
export default Demo7
