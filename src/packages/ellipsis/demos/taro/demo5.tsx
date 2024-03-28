import React from 'react'
import { Ellipsis, Cell } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'

const Demo5 = () => {
  const content =
    'NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。'
  return (
    <>
      <Cell>
        <Ellipsis
          content={content}
          onClick={() => Taro.showToast({ title: 'Clicked!' })}
          onChange={(type) => Taro.showToast({ title: type })}
          direction="start"
          expandText="展开"
          collapseText="收起"
        />
      </Cell>
      <Cell>
        <Ellipsis
          content={content}
          direction="middle"
          expandText="展开"
          collapseText="收起"
        />
      </Cell>
      <Cell>
        <Ellipsis
          content={content}
          direction="end"
          rows="3"
          expandText="展开"
          collapseText="收起"
        />
      </Cell>
    </>
  )
}
export default Demo5
