import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react'

const Demo24 = () => {
  const [tabvalue, setTabvalue] = useState<string | number>('0')
  return (
    <>
      <Tabs
        value={tabvalue}
        onChange={(value) => {
          setTabvalue(value)
        }}
        ariaLabel="选项卡"
      >
        <Tabs.TabPane
          title="Tab longitem"
          value="0"
          titleAriaLabel="tab1"
          ariaLabel="tab1 content"
        >
          Tab longitem
        </Tabs.TabPane>
        <Tabs.TabPane
          title="Tab 2"
          value="1"
          titleAriaLabel="tab2"
          ariaLabel="tab2 content"
        >
          Tab 2
        </Tabs.TabPane>
        <Tabs.TabPane
          title="Tab 3"
          value="2"
          titleAriaLabel="tab3"
          ariaLabel="tab3 content"
        >
          Tab 3
        </Tabs.TabPane>
      </Tabs>
    </>
  )
}
export default Demo24
