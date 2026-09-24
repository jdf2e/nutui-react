import React from 'react'
import { Cell, Toast } from '@nutui/nutui-react'

const Demo1 = () => {
  const iconSmall =
    'https://img14.360buyimg.com/img/jfs/t1/532580/36/3419/521/6ab2770dF01b62b30/027601e01e45fd82.png'
  const iconLarge =
    'https://img30.360buyimg.com/img/jfs/t1/526019/31/8316/531/6ab2789eF8aa57258/0276028028153f64.png'

  const testClick = (
    event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    Toast.show('点击事件')
  }
  return (
    <>
      <Cell
        icon={<img src={iconSmall} style={{ width: 15, height: 15 }} alt="" />}
        title="我是标题"
        extra="描述文字"
        align="center"
        style={{
          '--nutui-cell-icon-margin': 'calc(8px * var(--nut-scale-f, 1))',
        }}
      />
      <Cell title="我是标题" description="我是描述" extra="描述文字" />
      <Cell
        icon={<img src={iconLarge} style={{ width: 20, height: 20 }} alt="" />}
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
