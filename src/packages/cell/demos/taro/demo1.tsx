import React from 'react'
import { Cell } from '@nutui/nutui-react-taro'
import { ITouchEvent } from '@tarojs/components'
import { ConfigI } from '@nutui/icons-react-taro'

const Demo1 = () => {
  const testClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent
  ) => {
    console.log('点击事件')
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
      <Cell clickable title="点击测试" onClick={(event) => testClick(event)} />
      <Cell title="圆角设置0" radius={0} />
    </>
  )
}
export default Demo1
