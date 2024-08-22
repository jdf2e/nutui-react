import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Cell from '@/packages/cell'
import './demo.scss'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'
import Demo8 from './demos/h5/demo8'
import Demo9 from './demos/h5/demo9'

const AvatarDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      '67f78db5': '支持三种尺寸：small、normal、large',
      '3928b17e': '支持两种形状：square、round',
      '049b6a97': '支持三种类型：图片、Icon 以及字符',
      a304dabf: 'Icon和字符型可以自定义图标颜色及背景色',
      '89bca4e7': '带徽标的头像',
      e981579e: '头像组合展现',
      f645fc65: '组合头像可控制层级方向',
      '43f00872': '点击头像触发事件',
      f645fc66: '列表展示',
    },
    'zh-TW': {
      '67f78db5': '支持三種尺寸：small、normal、large',
      '3928b17e': '支持兩種形狀：square、round',
      '049b6a97': '支持三種類型：圖片、Icon 以及字符',
      a304dabf: 'Icon和字符型可以自定義圖標顏色及背景色',
      '89bca4e7': '帶徽標的頭像',
      e981579e: '頭像組合展現',
      f645fc65: '組合頭像可控制層級方向',
      '43f00872': '點擊頭像觸發事件',
      f645fc66: '列表展示',
    },
    'en-US': {
      '67f78db5': 'Support three sizes: small, normal, large',
      '3928b17e': 'Two shapes are supported: square, round',
      '049b6a97': 'Three types are supported: Picture, Icon and Character',
      a304dabf:
        'Icon and character type can customize icon color and background color',
      '89bca4e7': 'Avatar with logo',
      e981579e: 'Avatar combination display',
      f645fc65: 'Combining avatars to control hierarchy direction',
      '43f00872': 'Click on the avatar to trigger the event',
      f645fc66: 'list',
    },
  })

  return (
    <>
      <div className="demo full avatar-demo">
        <h2>{translated['67f78db5']}</h2>
        <Cell align="flex-end">
          <Demo1 />
        </Cell>

        <h2>{translated['3928b17e']}</h2>
        <Cell>
          <Demo2 />
        </Cell>
        <h2>{translated['049b6a97']}</h2>
        <Cell>
          <Demo3 />
        </Cell>
        <h2>{translated.a304dabf}</h2>
        <Cell>
          <Demo4 />
        </Cell>
        <h2>{translated['89bca4e7']}</h2>
        <Cell>
          <Demo5 />
        </Cell>
        <h2>{translated.e981579e}</h2>
        <Demo6 />
        <h2>{translated.f645fc65}</h2>
        <Cell>
          <Demo7 />
        </Cell>
        <h2>{translated['43f00872']}</h2>
        <Cell>
          <Demo8 />
        </Cell>
        <h2>{translated.f645fc66}</h2>
        <Cell>
          <Demo9 />
        </Cell>
      </div>
    </>
  )
}

export default AvatarDemo
