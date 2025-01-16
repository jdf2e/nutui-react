import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo16 = () => {
  const [tab4value, setTab4value] = useState<string | number>('0')
  return (
    <>
      <Tabs
        value={tab4value}
        onChange={(value) => {
          setTab4value(value)
        }}
      >
        <Tabs.TabPane title="第一名top1">第一名top1</Tabs.TabPane>
        <Tabs.TabPane title="低阶特卖">低阶特卖</Tabs.TabPane>
        <Tabs.TabPane title="上新日">上新日</Tabs.TabPane>
        <Tabs.TabPane title="百亿补贴">百亿补贴</Tabs.TabPane>
        <Tabs.TabPane title="今日聚超值">今日聚超值</Tabs.TabPane>
        <Tabs.TabPane title="真好真便宜">真好真便宜</Tabs.TabPane>
      </Tabs>
    </>
  )
}
export default Demo16
