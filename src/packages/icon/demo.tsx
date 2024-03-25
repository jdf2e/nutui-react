import React from 'react'
import '@nutui/icons-react/dist/style_iconfont.css'
import { Cell } from '@nutui/nutui-react'
import { useTranslate } from '../../sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'

const style = `
.nut-cell > .nutui-iconfont, .nut-icon {
  margin-right: 10px;
}
ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  width: 100%;
}
ul li {
    flex: 0 0 25%;
    max-width: 25%;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

[dir='rtl'] .nut-icon,
.nut-rtl .nut-icon,[dir='rtl'] .nut-iconfont,
.nut-rtl .nut-iconfont {
  transform: rotateY(180deg);
  margin-right: 0px;
  margin-left: 10px;
}
`
const IconDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      '84aa6bce': '基础用法',
      svg: 'SVG 按需使用',
      dab8a74f: '图片链接',
      '52c15454': '图标颜色',
      '7aeb5407': '图标大小',
      f2e6c6d6: '基础图标',
    },
    'zh-TW': {
      '84aa6bce': '基礎用法',
      svg: 'SVG 按需使用',
      dab8a74f: '圖片連結',
      '52c15454': '圖示顏色',
      '7aeb5407': '圖示大小',
      f2e6c6d6: '基礎圖示',
    },
    'en-US': {
      '84aa6bce': 'Basic Usage',
      svg: 'SVG Import On Demand',
      dab8a74f: 'Image Link',
      '52c15454': 'IconFont Color',
      '7aeb5407': 'IconFont Size',
      f2e6c6d6: 'Base IconFont',
    },
  })

  return (
    <>
      <style>{style}</style>
      <div className="demo">
        <h2>{translated.svg}</h2>
        <Cell>
          <Demo1 />
        </Cell>
        <h2>{translated['84aa6bce']}</h2>
        <Cell>
          <Demo2 />
        </Cell>
        <h2>{translated.dab8a74f}</h2>
        <Cell>
          <Demo3 />
        </Cell>
        <h2>{translated['52c15454']}</h2>
        <Cell>
          <Demo4 />
        </Cell>
        <h2>{translated['7aeb5407']}</h2>
        <Cell style={{ alignItems: 'center' }}>
          <Demo5 />
        </Cell>
        <Demo6 />
        <Demo7 />
      </div>
    </>
  )
}

export default IconDemo
