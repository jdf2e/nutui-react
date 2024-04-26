import React from 'react'
import { Empty, Button } from '@nutui/nutui-react'

const Demo6 = () => {
  return (
    <Empty
      status="error"
      description="加载失败"
      style={{ marginBottom: '20px' }}
    >
      <div style={{ marginTop: '10px' }}>
        <Button icon="refresh" type="primary" size="small">
          重试
        </Button>
      </div>
    </Empty>
  )
}
export default Demo6
