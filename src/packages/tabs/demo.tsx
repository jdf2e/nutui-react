import React, { useEffect, useRef, useState } from 'react'
import { Star } from '@nutui/icons-react'
import { Tabs } from './tabs'
import Swiper from '../swiper'
import { useTranslate } from '../../sites/assets/locale'

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
      titleCard: '基础用法-卡片样式',
      titleButton: '基础用法-按钮样式',
      titleDivider: '基础用法-分割线样式',
      title2: '通过 value 匹配',
      title3: '数据异步渲染 3s',
      title4: '数量多,滚动操作',
      title5: '左右布局',
      title6: '左右布局-微笑曲线',
      title12: '嵌套布局',
      title13: '嵌套布局2',
      title7: 'Title 字体尺寸：20px 12px',
      title8: '自定义标签栏',
      title9: 'Tabpane 自动高度',
      title10: 'CSS 粘性布局',
      title11: 'Title 左对齐',
      titleLeftCard: '左对齐-卡片样式',
      titleLeftButton: '左对齐-按钮样式',
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
      titleLite: 'Basic Usage - simple mode',
      titleCard: 'Basic Usage - card mode',
      titleButton: 'Basic Usage - button mode',
      titleDivider: 'Basic Usage - divider mode',
      title2: 'Match by value',
      title3: 'Data is rendered asynchronously for 3s',
      title4: 'A large number of scrolling operations',
      title5: 'Left and right layout',
      title6: 'Left and Right Layout - Smile Curve',
      title12: 'Tabs in Tabs',
      title13: 'Tabs in Tabs 2',
      title7: 'Title font size: 20px 12px',
      title8: 'custom tab bar',
      title9: 'Tabpane auto height',
      title10: 'CSS Sticky',
      title11: 'Title left align',
      titleLeftCard: 'Title left align - card mode',
      titleLeftButton: 'Title left align - button mode',
      titleLeftDivider: 'Title left align - divider mode',
      custom1: 'custom 1',
      custom2: 'custom 2',
      custom3: 'custom 3',
      pane1: 'Low-end sale',
      pane2: 'new day',
      pane3: 'Ten billion subsidies',
      pane4: 'Super value today',
      pane5: 'So good and so cheap',
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
        <Tabs
          value={tab1value}
          onChange={(value) => {
            setTab1value(value)
          }}
        >
          <Tabs.TabPane title="Tab 1"> Tab 1</Tabs.TabPane>
          <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
        </Tabs>
        <h2>{translated.title1}</h2>
        <Tabs
          value={tab2value}
          onChange={(value) => {
            setTab2value(value)
          }}
          activeType="smile"
        >
          <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
        </Tabs>
        <h2>{translated.titleLite}</h2>
        <Tabs
          value={tab111value}
          activeType="simple"
          onChange={(value) => {
            setTab111value(value)
          }}
        >
          <Tabs.TabPane title="Tab 1"> Tab 1</Tabs.TabPane>
          <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
        </Tabs>
        <h2>{translated.titleCard}</h2>
        <Tabs
          value={tab111value}
          activeType="card"
          onChange={(value) => {
            setTab111value(value)
          }}
        >
          <Tabs.TabPane title="Tab 1"> Tab 1</Tabs.TabPane>
          <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
        </Tabs>
        <h2>{translated.titleButton}</h2>
        <Tabs
          value={tab111value}
          activeType="button"
          onChange={(value) => {
            setTab111value(value)
          }}
        >
          <Tabs.TabPane title="Tab 1"> Tab 1</Tabs.TabPane>
          <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
        </Tabs>
        <h2>{translated.title_divider}</h2>
        <Tabs
          value={tab111value}
          activeType="divider"
          onChange={(value) => {
            setTab111value(value)
          }}
        >
          <Tabs.TabPane title="Tab 1"> Tab 1</Tabs.TabPane>
          <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
        </Tabs>
        <h2>{translated.title11}</h2>
        <Tabs
          value={tab3value}
          align="left"
          onChange={(value) => {
            setTab3value(value)
          }}
        >
          <Tabs.TabPane title="Tab 1"> Tab 1</Tabs.TabPane>
          <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
        </Tabs>
        <h2>{translated.titleLeftCard}</h2>
        <Tabs
          value={tab111value}
          activeType="card"
          align="left"
          onChange={(value) => {
            setTab111value(value)
          }}
        >
          <Tabs.TabPane title="Tab 1"> Tab 1</Tabs.TabPane>
          <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
        </Tabs>
        <h2>{translated.titleLeftButton}</h2>
        <Tabs
          value={tab111value}
          activeType="button"
          align="left"
          onChange={(value) => {
            setTab111value(value)
          }}
        >
          <Tabs.TabPane title="Tab 1"> Tab 1</Tabs.TabPane>
          <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
        </Tabs>
        <h2>{translated.title_left_divider}</h2>
        <Tabs
          value={tab111value}
          activeType="divider"
          align="left"
          onChange={(value) => {
            setTab111value(value)
          }}
        >
          <Tabs.TabPane title="Tab 1"> Tab 1</Tabs.TabPane>
          <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
        </Tabs>
        <h2>{translated.title2}</h2>
        <Tabs
          value={tab4value}
          onChange={(value) => {
            setTab4value(value)
          }}
        >
          <Tabs.TabPane title="Tab 1" value="0">
            Tab 1
          </Tabs.TabPane>
          <Tabs.TabPane title="Tab 2" value="1" disabled>
            Tab 2
          </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3" value="2">
            Tab 3
          </Tabs.TabPane>
        </Tabs>
        <h2>滑动切换</h2>
        <Tabs
          value={tabIndex}
          onChange={(page) => {
            swiperRef.current?.to(page)
            setTabIndex(page)
          }}
        >
          <Tabs.TabPane title="Tab 1" />
          <Tabs.TabPane title="Tab 2" />
          <Tabs.TabPane title="Tab 3" />
        </Tabs>
        <Swiper
          defaultValue={0}
          loop={false}
          ref={swiperRef}
          onChange={(page) => {
            setTabIndex(page)
          }}
        >
          <Swiper.Item>
            <div style={{ backgroundColor: '#fff', padding: '10px' }}>
              Tab 1
            </div>
          </Swiper.Item>
          <Swiper.Item>
            <div style={{ backgroundColor: '#fff', padding: '10px' }}>
              Tab 2
            </div>
          </Swiper.Item>
          <Swiper.Item>
            <div style={{ backgroundColor: '#fff', padding: '10px' }}>
              Tab 3
            </div>
          </Swiper.Item>
        </Swiper>
        <h2>{translated.title10}</h2>
        <Tabs
          value={tab51value}
          style={{ position: 'relative', zIndex: 11 }}
          tabStyle={{ position: 'sticky', top: '0px', zIndex: 11 }}
          onChange={(value) => {
            setTab51value(value)
          }}
        >
          <Tabs.TabPane title="Tab 1" value="0">
            <p>Tab 1</p>
            <p>Tab 1</p>
            <p>Tab 1</p>
            <p>Tab 1</p>
            <p>Tab 1</p>
            <p>Tab 1</p>
            <p>Tab 1</p>
            <p>Tab 1</p>
            <p>Tab 1</p>
          </Tabs.TabPane>
          <Tabs.TabPane title="Tab 2" value="1">
            <p>Tab 2</p>
            <p>Tab 2</p>
            <p>Tab 2</p>
            <p>Tab 2</p>
            <p>Tab 2</p>
            <p>Tab 2</p>
            <p>Tab 2</p>
            <p>Tab 2</p>
          </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3" value="2">
            Tab 3
          </Tabs.TabPane>
        </Tabs>
        <h2>{translated.title9}</h2>
        <Tabs
          value={tab61value}
          autoHeight
          onChange={(value) => {
            setTab61value(value)
          }}
        >
          <Tabs.TabPane title="Tab 1" value="0">
            <p>Tab 1</p>
            <p>Tab 1</p>
            <p>Tab 1</p>
            <p>Tab 1</p>
          </Tabs.TabPane>
          <Tabs.TabPane title="Tab 2" value="1">
            Tab 2
          </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3" value="2">
            Tab 3
          </Tabs.TabPane>
        </Tabs>
        <h2>{translated.title3}</h2>
        <Tabs
          value={tab81value}
          onChange={(value) => {
            setTab81value(value)
          }}
        >
          {list8.map((item: any) => (
            <Tabs.TabPane key={item} title={`Tab ${item}`}>
              Tab {item}
            </Tabs.TabPane>
          ))}
        </Tabs>
        <h2>{translated.title4}</h2>
        <Tabs
          value={tab91value}
          onChange={(value) => {
            setTab91value(value)
          }}
        >
          <Tabs.TabPane title={translated.pane1}>
            {translated.pane1}
          </Tabs.TabPane>
          <Tabs.TabPane title={translated.pane2}>
            {translated.pane2}
          </Tabs.TabPane>
          <Tabs.TabPane title={translated.pane3}>
            {translated.pane3}
          </Tabs.TabPane>
          <Tabs.TabPane title={translated.pane4}>
            {translated.pane4}
          </Tabs.TabPane>
          <Tabs.TabPane title={translated.pane5}>
            {translated.pane5}
          </Tabs.TabPane>
        </Tabs>
        <h2>{translated.title4}</h2>
        <Tabs
          value={tab92value}
          style={{ height: '300px' }}
          onChange={(value) => {
            setTab92value(value)
          }}
          direction="vertical"
        >
          {list4.map((item) => (
            <Tabs.TabPane key={item} title={`Tab ${item}`}>
              Tab {item}
            </Tabs.TabPane>
          ))}
        </Tabs>
        <h2>{translated.title5}</h2>
        <Tabs
          style={{ height: '300px' }}
          value={tab5value}
          onChange={(value) => {
            setTab5value(value)
          }}
          direction="vertical"
        >
          {list5.map((item) => (
            <Tabs.TabPane key={item} title={`Tab ${item}`}>
              Tab {item}
            </Tabs.TabPane>
          ))}
        </Tabs>
        <h2>{translated.title6}</h2>
        <Tabs
          style={{ height: '300px' }}
          value={tab6value}
          onChange={(value) => {
            setTab6value(value)
          }}
          activeType="smile"
          direction="vertical"
        >
          {list5.map((item) => (
            <Tabs.TabPane key={item} title={`Tab ${item}`}>
              Tab {item}
            </Tabs.TabPane>
          ))}
        </Tabs>

        <h2>{translated.title12}</h2>
        <Tabs
          value={tab82value}
          onChange={(value) => {
            setTab82value(value)
          }}
          direction="vertical"
        >
          <Tabs.TabPane title="Tab 1">
            <Tabs
              value={tab9value}
              onChange={(value) => {
                setTab9value(value)
              }}
              direction="horizontal"
            >
              <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
              <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
              <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
            </Tabs>
          </Tabs.TabPane>
          <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
        </Tabs>

        <h2>{translated.title13}</h2>
        <Tabs
          value={tab8value}
          onChange={(value) => {
            setTab8value(value)
          }}
          autoHeight
        >
          <Tabs.TabPane title="Tab 1">
            <Tabs
              value={tab93value}
              onChange={(value) => {
                setTab93value(value)
              }}
              direction="vertical"
            >
              <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
              <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
              <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
            </Tabs>
          </Tabs.TabPane>
          <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
        </Tabs>

        <h2>{translated.title7}</h2>
        <Tabs
          value={tab11value}
          onChange={(value) => {
            setTab11value(value)
          }}
          style={{ '--nutui-tabs-titles-font-size': '20px' }}
        >
          <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
        </Tabs>
        <Tabs
          value={tab12value}
          onChange={(value) => {
            setTab12value(value)
          }}
          style={{ '--nutui-tabs-titles-font-size': '12px' }}
        >
          <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
        </Tabs>

        <h2>{translated.title8}</h2>
        <Tabs
          value={tab7value}
          title={() => {
            return list6.map((item) => (
              <div
                onClick={() => setTab7value(item.value)}
                className={`nut-tabs-titles-item ${
                  tab7value === item.value ? 'nut-tabs-titles-item-active' : ''
                }`}
                key={item.value}
              >
                {item.icon || null}
                <span className="nut-tabs-titles-item-text">{item.title}</span>
                <span className="nut-tabs-titles-item-line" />
              </div>
            ))
          }}
        >
          {list6.map((item) => (
            <Tabs.TabPane key={item.value} value={item.value}>
              {item.title}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    </>
  )
}

export default TabsDemo
