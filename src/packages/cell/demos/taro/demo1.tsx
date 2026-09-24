import React from 'react'
import { Cell, pxTransform } from '@nutui/nutui-react-taro'
import { Image, ITouchEvent, View } from '@tarojs/components'

const Demo1 = () => {
  const iconSmall =
    'https://img14.360buyimg.com/img/jfs/t1/532580/36/3419/521/6ab2770dF01b62b30/027601e01e45fd82.png'
  const iconLarge =
    'https://img30.360buyimg.com/img/jfs/t1/526019/31/8316/531/6ab2789eF8aa57258/0276028028153f64.png'

  const testClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent
  ) => {
    console.log('点击事件')
  }
  return (
    <>
      <Cell
        icon={
          <Image
            src={iconSmall}
            style={{ width: pxTransform(15), height: pxTransform(15) }}
          />
        }
        title="我是标题"
        extra="描述文字"
        align="center"
        style={{
          '--nutui-cell-icon-margin': 'calc(8px * var(--nut-scale-f, 1))',
        }}
      />
      <Cell title="我是标题" description="我是描述" extra="描述文字" />
      <Cell
        icon={
          <Image
            src={iconLarge}
            style={{ width: pxTransform(20), height: pxTransform(20) }}
          />
        }
        title="我是标题"
        description="我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述"
        extra="描述文字"
        content={<View>可替换内容区域</View>}
      />
      <Cell
        title="点击测试"
        clickable
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => testClick(event)}
      />
      <Cell title="圆角设置0" radius={0} />
    </>
  )
}
export default Demo1
