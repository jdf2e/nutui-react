import React from 'react'
import { Cell, Toast } from '@nutui/nutui-react'
import { ConfigI } from '@nutui/icons-react'

const Demo1 = () => {
  const testClick = (
    event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    Toast.show('点击事件')
  }
  return (
    <>
      <Cell title="我是标题" extra="描述文字" />
      <Cell
        leading={<ConfigI />}
        title="我是标题"
        extra="描述文字"
        align="center"
        style={{
          '--nutui-cell-leading-margin': 'calc(8px * var(--nut-scale-f, 1))',
        }}
      />
      <Cell title="我是标题" description="我是描述" extra="描述文字" />
      <Cell
        leading={<ConfigI />}
        title="我是标题"
        description="我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述"
        extra="描述文字"
        content={<div>可替换内容区域</div>}
      />
      <Cell
        clickable
        title="点击测试"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => testClick(event)}
      />
      <Cell title="圆角设置0" radius={0} />
    </>
  )
}
export default Demo1
