import React from 'react'
import { Button, Cell, Empty } from '@nutui/nutui-react'

const Demo6 = () => {
  return (
    <Cell>
      <Empty description="加载失败">
        <div style={{ marginTop: '10px' }}>
          <Button type="primary" size="small">
            刷新重试
          </Button>
        </div>
      </Empty>
    </Cell>
  )
}
export default Demo6
