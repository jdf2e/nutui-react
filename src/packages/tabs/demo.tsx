import React, { useEffect, useRef, useState } from 'react'
import { Star } from '@nutui/icons-react'
import { useTranslate } from '../../sites/assets/locale'
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
import Demo13 from './demos/h5/demo13'
import Demo14 from './demos/h5/demo14'
import Demo15 from './demos/h5/demo15'
import Demo16 from './demos/h5/demo16'
import Demo17 from './demos/h5/demo17'
import Demo18 from './demos/h5/demo18'
import Demo19 from './demos/h5/demo19'
import Demo20 from './demos/h5/demo20'
import Demo21 from './demos/h5/demo21'
import Demo22 from './demos/h5/demo22'
import Demo23 from './demos/h5/demo23'

interface T {
  basic: string
  title1: string
  titleLite: string
  titleCard: string
  titleButton: string
  titleDivider: string
  title2: string
  title3: string
  title4: string
  title5: string
  title6: string
  title12: string
  title13: string
  title14: string
  title7: string
  title8: string
  title9: string
  title10: string
  title11: string
  titleLeftCard: string
  titleLeftButton: string
  titleLeftDivider: string
  custom1: string
  custom2: string
  custom3: string
  pane1: string
  pane2: string
  pane3: string
  pane4: string
  pane5: string
}

const TabsDemo = () => {
  const [translated] = useTranslate<T>({
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
      title13: '嵌套布局2',
      title14: '滑动切换',
      title7: 'Title 字体尺寸：20px 12px',
      title8: '自定义标签栏',
      title9: 'Tabpane 自动高度',
      title10: 'CSS 粘性布局',
      title11: 'Title 左对齐',
      titleLeftCard: '左对齐-卡片模式',
      titleLeftButton: '左对齐-按钮模式',
      titleLeftDivider: '左对齐-分割线模式',
      custom1: '自定义 1',
      custom2: '自定义 2',
      custom3: '自定义 3',
      pane1: '低阶特卖',
      pane2: '上新日',
      pane3: '百亿补贴',
      pane4: '今日聚超值',
      pane5: '真好真便宜',
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
      custom1: 'Custom 1',
      custom2: 'Custom 2',
      custom3: 'Custom 3',
      pane1: 'Low-end Sale',
      pane2: 'New Day',
      pane3: 'Ten Billion Subsidies',
      pane4: 'Super Value Today',
      pane5: 'So Good And So Cheap',
    },
  })

  const [tab1value, setTab1value] = useState<string | number>('0')
  const [tab11value, setTab11value] = useState<string | number>('0')
  const [tab111value, setTab111value] = useState<string | number>('0')
  const [tab12value, setTab12value] = useState<string | number>('0')
  const [tab2value, setTab2value] = useState<string | number>('0')
  const [tab3value, setTab3value] = useState<string | number>('0')
  const [tab4value, setTab4value] = useState<string | number>('0')
  const [tab5value, setTab5value] = useState<string | number>('0')
  const [tab51value, setTab51value] = useState<string | number>('0')
  const [tab6value, setTab6value] = useState<string | number>('0')
  const [tab61value, setTab61value] = useState<string | number>('0')
  const [tab7value, setTab7value] = useState<string | number>('c1')
  const [tab8value, setTab8value] = useState<string | number>('0')
  const [tab81value, setTab81value] = useState<string | number>('0')
  const [tab82value, setTab82value] = useState<string | number>('0')
  const [tab9value, setTab9value] = useState<string | number>('0')
  const [tab91value, setTab91value] = useState<string | number>('0')
  const [tab92value, setTab92value] = useState<string | number>('0')
  const [tab93value, setTab93value] = useState<string | number>('0')
  const [list8, setList8] = useState<any>([])
  const list4 = Array.from(new Array(10).keys())
  const list5 = Array.from(new Array(2).keys())
  const list6 = [
    {
      title: translated.custom1,
      value: 'c1',
      icon: <Star style={{ marginRight: '4px' }} />,
    },
    {
      title: translated.custom2,
      value: 'c2',
    },
    {
      title: translated.custom3,
      value: 'c3',
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      setTab8value(2)
      setList8(Array.from(new Array(3).keys()))
    }, 3000)
  }, [])

  const swiperRef = useRef<any>(null)
  const [tabIndex, setTabIndex] = useState<string | number>(0)

  return (
    <>
      <div className="demo full no-overflow">
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
