import React, { useState } from 'react'
import { Tabs, TabPane, Empty } from '@nutui/nutui-react'

const Demo4 = () => {
  const [tabvalue, setTabvalue] = useState<string | number>('0')

  return (
    <Tabs
      value={tabvalue}
      onChange={(paneKey) => {
        setTabvalue(paneKey)
      }}
    >
      <TabPane title="通用空状态" value="0">
        <Empty status="empty" title="通用空状态" />
      </TabPane>
      <TabPane title="加载失败/错误" value="1">
        <Empty status="error" title="加载失败/错误" />
      </TabPane>
      <TabPane title="网络异常" value="2">
        <Empty status="network" title="网络异常" />
      </TabPane>
    </Tabs>
  )
}
export default Demo4
