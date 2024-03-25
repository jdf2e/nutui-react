import React from 'react'
import { ConfigProvider, Cell } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return (
    <>
      <ConfigProvider direction="rtl">
        <Cell
          title={
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span style={{ marginLeft: '5px' }}>我是标题</span>
            </div>
          }
          description={<span>我是描述</span>}
          extra="描述文字"
        />
      </ConfigProvider>
    </>
  )
}

export default Demo5
