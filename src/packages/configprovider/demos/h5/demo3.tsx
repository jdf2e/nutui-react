import React from 'react'
import { ConfigProvider, Cell } from '@nutui/nutui-react'

const Demo = () => {
  return (
    <>
      <ConfigProvider direction="rtl">
        <Cell
          title={
            <div>
              <span>我是标题</span>
            </div>
          }
          description={<span>我是描述</span>}
          extra="描述文字"
        />
      </ConfigProvider>
    </>
  )
}

export default Demo
