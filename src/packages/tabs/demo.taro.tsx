import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'

import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'
import Demo7 from './demos/taro/demo7'
import Demo8 from './demos/taro/demo8'
import Demo9 from './demos/taro/demo9'
import Demo10 from './demos/taro/demo10'
import Demo11 from './demos/taro/demo11'
import Demo12 from './demos/taro/demo12'
import Demo13 from './demos/taro/demo13'
import Demo14 from './demos/taro/demo14'
import Demo15 from './demos/taro/demo15'
import Demo16 from './demos/taro/demo16'
import Demo17 from './demos/taro/demo17'
import Demo18 from './demos/taro/demo18'
import Demo19 from './demos/taro/demo19'
import Demo20 from './demos/taro/demo20'
import Demo21 from './demos/taro/demo21'
import Demo22 from './demos/taro/demo22'
import Demo23 from './demos/taro/demo23'

const TabsDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      title1: '基础用法-微笑曲线',
      titleLite: '基础用法-简约模式',
      titleCard: '基础用法-卡片模式',
      titleButton: '基础用法-按钮模式',
      titleDivider: '基础用法-分割线模式',
      title2: '通过 value 匹配',
      title3: '数据异步渲染 3s',
      title4: '数量多,滚动操作',
      title5: '左右布局',
      title6: '左右布局-微笑曲线',
      title12: '嵌套布局',
      title13: '嵌套布局 2',
      title14: '滑动切换',
      title7: 'Title 字体尺寸：20px 12px',
      title8: '自定义标签栏',
      title9: 'Tabpane 自动高度',
      title10: 'CSS 粘性布局',
      title11: 'Title 左对齐',
      titleLeftCard: '左对齐-卡片模式',
      titleLeftButton: '左对齐-按钮模式',
      titleLeftDivider: '左对齐-分割线模式',
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Basic Usage - Smile Curve',
      titleLite: 'Basic Usage - Simple Mode',
      titleCard: 'Basic Usage - Card Mode',
      titleButton: 'Basic Usage - Button Mode',
      titleDivider: 'Basic Usage - Divider Mode',
      title2: 'Match By Value',
      title3: 'Data Is Rendered Asynchronously For 3s',
      title4: 'A Large Number Of Scrolling Operations',
      title5: 'Left And Right Layout',
      title6: 'Left And Right Layout - Smile Curve',
      title12: 'Tabs In Tabs',
      title13: 'Tabs In Tabs 2',
      title14: 'Slide To Switch',
      title7: 'Title FontSize: 20px 12px',
      title8: 'Custom Tab Bar',
      title9: 'Tabpane Auto Height',
      title10: 'CSS Sticky',
      title11: 'Title Left Align',
      titleLeftCard: 'Title Left Align - Card Mode',
      titleLeftButton: 'Title Left Align - Button Mode',
      titleLeftDivider: 'Title Left Align - Divider Mode',
    },
  })

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web  full' : ''}`}>
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.title1}</h2>
        <Demo2 />
        <h2>{translated.titleLite}</h2>
        <Demo3 />
        <h2>{translated.titleCard}</h2>
        <Demo4 />
        <h2>{translated.titleButton}</h2>
        <Demo5 />
        <h2>{translated.titleDivider}</h2>
        <Demo6 />
        <h2>{translated.title11}</h2>
        <Demo7 />
        <h2>{translated.titleLeftCard}</h2>
        <Demo8 />
        <h2>{translated.titleLeftButton}</h2>
        <Demo9 />
        <h2>{translated.titleLeftDivider}</h2>
        <Demo10 />
        <h2>{translated.title2}</h2>
        <Demo11 />
        <h2>{translated.title14}</h2>
        <Demo12 />
        <h2>{translated.title10}</h2>
        <Demo13 />
        <h2>{translated.title9}</h2>
        <Demo14 />
        <h2>{translated.title3}</h2>
        <Demo15 />
        <h2>{translated.title4}</h2>
        <Demo16 />
        <h2>{translated.title4} 2</h2>
        <Demo17 />
        <h2>{translated.title5}</h2>
        <Demo18 />
        <h2>{translated.title6}</h2>
        <Demo19 />
        <h2>{translated.title12}</h2>
        <Demo20 />
        <h2>{translated.title13}</h2>
        <Demo21 />
        <h2>{translated.title7}</h2>
        <Demo22 />
        <h2>{translated.title8}</h2>
        <Demo23 />
      </div>
    </>
  )
}

export default TabsDemo
