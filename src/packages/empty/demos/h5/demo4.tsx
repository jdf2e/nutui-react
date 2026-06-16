import React, { useState } from 'react'
import { Empty, TabPane, Tabs } from '@nutui/nutui-react'

const statusList = [
  {
    status: 'network' as const,
    title: '网络连接已断开',
    description: '请检查网络设置或刷新页面',
  },
  {
    status: 'comment' as const,
    title: '暂无评价',
    description: '快来发表第一条评价吧',
  },
  {
    status: 'search' as const,
    title: '暂无搜索结果',
    description: '换个关键词试试吧',
  },
  {
    status: 'shop' as const,
    title: '暂无店铺',
    description: '去看看其他店铺吧',
  },
  {
    status: 'address' as const,
    title: '暂无收货地址',
    description: '添加地址，享受便捷购物',
  },
  {
    status: 'order' as const,
    title: '暂无订单',
    description: '快去挑选心仪的商品吧',
  },
  {
    status: 'favor' as const,
    title: '暂无收藏',
    description: '收藏喜欢的商品，方便下次查看',
  },
  {
    status: 'cart' as const,
    title: '小购物车大容量',
    description: '把喜欢的商品都加进来吧',
  },
]

const Demo4 = () => {
  const [tabvalue, setTabvalue] = useState<string | number>('0')

  return (
    <Tabs
      value={tabvalue}
      onChange={(paneKey) => {
        setTabvalue(paneKey)
      }}
    >
      {statusList.map((item, index) => (
        <TabPane key={item.status} title={item.status} value={String(index)}>
          <Empty
            size="half"
            status={item.status}
            title={item.title}
            description={item.description}
          />
        </TabPane>
      ))}
    </Tabs>
  )
}
export default Demo4
