import React, { useState } from 'react'
import { Cell, Tour, Tabbar } from '@nutui/nutui-react'

const Demo5 = () => {
  const [showTour, setShowTour] = useState(true)

  const closeTour = () => {
    setShowTour(false)
  }

  const steps = [
    {
      content: '70+ 高质量组件，覆盖移动端主流场景',
      target: 'target5',
    },
    {
      content: '支持一套代码同时开发多端小程序+H5',
      target: 'target6',
    },
    {
      content: '基于京东APP 10.0 视觉规范',
      target: 'target7',
      location: 'top-end',
    },
    {
      content: '支持定制主题，内置 700+ 个主题变量',
      target: 'target8',
      location: 'top-end',
    },
  ]

  return (
    <>
      <Cell
        title="点击试试"
        onClick={() => {
          setShowTour(true)
        }}
      />
      <Tabbar fixed>
        <Tabbar.Item id="target5" title="首页" />
        <Tabbar.Item id="target6" title="分类" />
        <Tabbar.Item id="target7" title="购物车" />
        <Tabbar.Item id="target8" title="我的" />
      </Tabbar>
      <Tour
        className="nut-custom-tour"
        visible={showTour}
        onClose={closeTour}
        list={steps}
        location="top-start"
        offset={[0, 0]}
        maskWidth={60}
        maskHeight={50}
      />
    </>
  )
}
export default Demo5
