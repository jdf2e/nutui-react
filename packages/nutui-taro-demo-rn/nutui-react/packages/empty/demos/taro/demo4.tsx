import React, { useState } from 'react'
import { Tabs, TabPane, Empty } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const [tabvalue, setTabvalue] = useState<string | number>('0')

  return (
    <Tabs
      value={tabvalue}
      onChange={(paneKey) => {
        setTabvalue(paneKey)
      }}
    >
      <TabPane title="无内容" value="0">
        <Empty status="empty" title="无内容" />
      </TabPane>
      <TabPane title="加载失败/错误" value="1">
        <Empty status="error" title="加载失败/错误" />
      </TabPane>
      <TabPane title="无网络" value="2">
        <Empty status="network" title="无网络" />
      </TabPane>
    </Tabs>
  )
}
export default Demo4
