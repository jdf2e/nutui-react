import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Cell from '@/packages/cell'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'
import Demo8 from './demos/h5/demo8'
import Demo9 from './demos/h5/demo9'
import Demo10 from './demos/h5/demo10'
import Demo11 from './demos/h5/demo11'
import Demo12 from './demos/h5/demo12'

const RadioDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      '74fc5d8a': '基础用法',
      bb7486f4: '选项',
      c1bae1ec: '水平使用',
      '8a2e2847': '自定义尺寸',
      '70ffa5d8': '自定义图标',
      '70ffa5d9': '自定义图标，通过Group实现列表形式',
      '0f261484': '触发事件',
      '0f261485': '设置形状',
      '6b1f669d': '当前选中值',
      disableOne: 'Group 模式下禁用某一项',
      disableAll: 'Group 模式下禁用全部选项',
      options: '配置 options 渲染单选按钮',
    },
    'zh-TW': {
      '74fc5d8a': '基礎用法',
      bb7486f4: '選項',
      c1bae1ec: '水準使用',
      '8a2e2847': '自定義尺寸',
      '70ffa5d8': '自定義圖標',
      '70ffa5d9': '自定義圖標，通過Group實現列表形式',
      '0f261484': '觸發事件',
      '0f261485': '設置形狀',
      '6b1f669d': '當前選中值',
      disableOne: 'Group 模式下禁用某一項',
      disableAll: 'Group 模式下禁用全部選項',
      options: '配置 options 渲染單選按鈕',
    },
    'en-US': {
      '74fc5d8a': 'Basic Usage',
      bb7486f4: 'Options',
      c1bae1ec: 'Horizontal use',
      '8a2e2847': 'Custom size',
      '70ffa5d8': 'Custom Icon',
      '70ffa5d9': 'Custom Icon, render list in Group mode',
      '0f261484': 'Trigger Event',
      '0f261485': 'Set shape',
      '6b1f669d': 'Currently selected',
      disableOne: 'Disable an item in Group mode',
      disableAll: 'Disable all options in Group mode',
      options: 'Render radios by configuring options',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated['74fc5d8a']}</h2>
        <Demo1 />
        <h2>{translated.disableOne}</h2>
        <Cell>
          <Demo2 />
        </Cell>
        <h2>{translated.disableAll}</h2>
        <Cell>
          <Demo3 />
        </Cell>
        <h2>{translated.disableOne}</h2>
        <Cell>
          <Demo4 />
        </Cell>
        <h2>{translated.disableAll}</h2>
        <Cell>
          <Demo5 />
        </Cell>
        <h2>{translated.c1bae1ec}</h2>
        <Demo6 />
        <h2>{translated['8a2e2847']}</h2>
        <Cell>
          <Demo7 />
        </Cell>
        <h2>{translated['70ffa5d8']}</h2>
        <Cell>
          <Demo8 />
        </Cell>
        <h2>{translated['70ffa5d9']}</h2>
        <Cell>
          <Demo9 />
        </Cell>
        <h2>{translated['0f261484']}</h2>
        <Cell>
          <Demo10 />
        </Cell>
        <h2>{translated.options}</h2>
        <Cell>
          <Demo11 />
        </Cell>
        <h2>{translated['0f261485']}</h2>
        <Cell.Group>
          <Cell>
            <Demo12 />
          </Cell>
        </Cell.Group>
      </div>
    </>
  )
}

export default RadioDemo
