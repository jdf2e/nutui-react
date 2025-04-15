import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react'

const Demo16 = () => {
  const [tabvalue, setTabvalue] = useState<number | string>('0')
  return (
    <>
      <Tabs
        value={tabvalue}
        onChange={(value) => {
          setTabvalue(value)
        }}
      >
        <Tabs.TabPane title="低阶特卖">低阶特卖</Tabs.TabPane>
        <Tabs.TabPane title="上新日">上新日</Tabs.TabPane>
        <Tabs.TabPane title="百亿补贴">百亿补贴</Tabs.TabPane>
        <Tabs.TabPane title="今日聚超值">今日聚超值</Tabs.TabPane>
        <Tabs.TabPane title="真好真便宜">真好真便宜</Tabs.TabPane>
        <Tabs.TabPane title="限时秒杀">限时秒杀</Tabs.TabPane>
        <Tabs.TabPane title="品牌特惠">品牌特惠</Tabs.TabPane>
        <Tabs.TabPane title="折扣专区">折扣专区</Tabs.TabPane>
        <Tabs.TabPane title="新品首发">新品首发</Tabs.TabPane>
        <Tabs.TabPane title="热销榜单">热销榜单</Tabs.TabPane>
      </Tabs>
    </>
  )
}
export default Demo16
