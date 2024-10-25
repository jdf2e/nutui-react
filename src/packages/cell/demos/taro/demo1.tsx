import { ArrowRight } from '@nutui/icons-react-taro'
import { Cell } from '@nutui/nutui-react-taro'
import React from 'react'

const Demo1 = () => {
  const testClick = (
    event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    console.log('点击事件')
  }
  return (
    <>
      <Cell title="我是标题" extra="描述文字" />
      <Cell title="我是标题" description="我是描述" extra="描述文字" />
      <Cell
        title="点击测试"
        clickable
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => testClick(event)}
        extra={
          <ArrowRight
            size={14}
            style={{
              alignItems: 'center',
            }}
          />
        }
      />
      <Cell title="禁用状态" disabled extra={<ArrowRight size={14} />} />
      <Cell title="圆角设置0" radius={0} />
    </>
  )
}
export default Demo1
