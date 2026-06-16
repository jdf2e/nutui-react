import React from 'react'
import { Cell, Empty, Toast } from '@nutui/nutui-react'

const Demo1 = () => {
  return (
    <Cell>
      <Empty
        size="full"
        status="network"
        title="网络连接已断开"
        description="请检查网络设置或刷新页面"
        actions={[
          {
            text: '刷新',
            type: 'primary',
            onClick: () => Toast.show('正在刷新...'),
          },
        ]}
      />
    </Cell>
  )
}
export default Demo1
