import React, { useEffect, useState } from 'react'
import { Tabs, TabPane, Icon } from '@/packages/nutui.react.taro'
import { useTranslate } from '@/sites/assets/locale/taro'

interface T {
  basic: string
  title1: string
  title2: string
  title3: string
  title4: string
  title5: string
  title6: string
  title7: string
  title8: string
  title9: string
  custom1: string
  custom2: string
  custom3: string
}

const TabsDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      title1: '基础用法-微笑曲线',
      title2: '通过 pane-key 匹配',
      title3: '数据异步渲染 3s',
      title4: '数量多,滚动操作',
      title5: '左右布局',
      title6: '左右布局-微笑曲线',
      title7: '标签栏字体尺寸 large normal small',
      title8: '自定义标签栏',
      title9: 'Tabpane 自动高度',
      custom1: '自定义 1',
      custom2: '自定义 2',
      custom3: '自定义 3',
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Basic Usage - Smile Curve',
      title2: 'Match by pane-key',
      title3: 'Data is rendered asynchronously for 3s',
      title4: 'A large number of scrolling operations',
      title5: 'Left and right layout',
      title6: 'Left and Right Layout - Smile Curve',
      title7: 'tab bar font size large normal small',
      title8: 'custom tab bar',
      title9: 'Tabpane auto height',
      custom1: 'custom 1',
      custom2: 'custom 2',
      custom3: 'custom 3',
    },
  })

  const [tab1value, setTab1value] = useState('0')
  const [tab2value, setTab2value] = useState('0')
  const [tab3value, setTab3value] = useState('0')
  const [tab4value, setTab4value] = useState('0')
  const [tab5value, setTab5value] = useState('0')
  const [tab6value, setTab6value] = useState('0')
  const [tab7value, setTab7value] = useState('c1')
  const [list3, setList3] = useState(Array.from(new Array(2).keys()))
  const list4 = Array.from(new Array(10).keys())
  const list5 = Array.from(new Array(2).keys())
  const list6 = [
    {
      title: translated.custom1,
      paneKey: 'c1',
      icon: 'dongdong',
    },
    {
      title: translated.custom2,
      paneKey: 'c2',
      icon: 'JD',
    },
    {
      title: translated.custom3,
      paneKey: 'c3',
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      list3.push(999)
      setTab3value('2')
      setList3(list3)
    }, 3000)
  }, [])
  return (
    <>
      <div className="demo full">
        <h2>{translated.basic}</h2>
        <Tabs
          value={tab1value}
          className="test"
          style={{ color: 'red' }}
          onChange={({ paneKey }) => {
            setTab1value(paneKey)
          }}
        >
          <TabPane title="Tab 1"> Tab 1 </TabPane>
          <TabPane title="Tab 2"> Tab 2 </TabPane>
          <TabPane title="Tab 3"> Tab 3 </TabPane>
        </Tabs>
        <h2>{translated.title1}</h2>
        <Tabs
          value={tab1value}
          onChange={({ paneKey }) => {
            setTab1value(paneKey)
          }}
          type="smile"
        >
          <TabPane title="Tab 1"> Tab 1 </TabPane>
          <TabPane title="Tab 2"> Tab 2 </TabPane>
          <TabPane title="Tab 3"> Tab 3 </TabPane>
        </Tabs>
        <h2>{translated.title2}</h2>
        <Tabs
          value={tab2value}
          onChange={({ paneKey }) => {
            setTab2value(paneKey)
          }}
        >
          <TabPane title="Tab 1" pane-key="0">
            {' '}
            Tab 1{' '}
          </TabPane>
          <TabPane title="Tab 2" pane-key="1" disabled>
            {' '}
            Tab 2{' '}
          </TabPane>
          <TabPane title="Tab 3" pane-key="2">
            {' '}
            Tab 3{' '}
          </TabPane>
        </Tabs>
        <h2>{translated.title9}</h2>
        <Tabs
          value={tab2value}
          autoHeight
          onChange={({ paneKey }) => {
            setTab2value(paneKey)
          }}
        >
          <TabPane title="Tab 1" pane-key="0">
            <p>Tab 1</p>
            <p>Tab 1</p>
            <p>Tab 1</p>
            <p>Tab 1</p>
          </TabPane>
          <TabPane title="Tab 2" pane-key="1">
            {' '}
            Tab 2{' '}
          </TabPane>
          <TabPane title="Tab 3" pane-key="2">
            {' '}
            Tab 3{' '}
          </TabPane>
        </Tabs>
        <h2>{translated.title3}</h2>
        <Tabs
          value={tab3value}
          onChange={({ paneKey }) => {
            setTab3value(paneKey)
          }}
        >
          {list3.map((item) => (
            <TabPane key={item} title={`Tab ${item}`}>
              {' '}
              Tab {item}{' '}
            </TabPane>
          ))}
        </Tabs>
        <h2>{translated.title4}</h2>
        <Tabs
          value={tab4value}
          onChange={({ paneKey }) => {
            setTab4value(paneKey)
          }}
          titleScroll
          titleGutter="10"
        >
          {list4.map((item) => (
            <TabPane key={item} title={`Tab ${item}`}>
              {' '}
              Tab {item}{' '}
            </TabPane>
          ))}
        </Tabs>
        <h2>{translated.title5}</h2>
        <Tabs
          value={tab5value}
          onChange={({ paneKey }) => {
            setTab5value(paneKey)
          }}
          titleScroll
          direction="vertical"
        >
          {list5.map((item) => (
            <TabPane key={item} title={`Tab ${item}`}>
              {' '}
              Tab {item}{' '}
            </TabPane>
          ))}
        </Tabs>
        <h2>{translated.title6}</h2>
        <Tabs
          value={tab6value}
          onChange={({ paneKey }) => {
            setTab6value(paneKey)
          }}
          type="smile"
          titleScroll
          direction="vertical"
        >
          {list5.map((item) => (
            <TabPane key={item} title={`Tab ${item}`}>
              {' '}
              Tab {item}{' '}
            </TabPane>
          ))}
        </Tabs>
        <h2>{translated.title7}</h2>
        <Tabs
          value={tab1value}
          onChange={({ paneKey }) => {
            setTab1value(paneKey)
          }}
          size="large"
        >
          <TabPane title="Tab 1"> Tab 1 </TabPane>
          <TabPane title="Tab 2"> Tab 2 </TabPane>
          <TabPane title="Tab 3"> Tab 3 </TabPane>
        </Tabs>
        <Tabs
          value={tab1value}
          onChange={({ paneKey }) => {
            setTab1value(paneKey)
          }}
          size="normal"
        >
          <TabPane title="Tab 1"> Tab 1 </TabPane>
          <TabPane title="Tab 2"> Tab 2 </TabPane>
          <TabPane title="Tab 3"> Tab 3 </TabPane>
        </Tabs>
        <Tabs
          value={tab1value}
          onChange={({ paneKey }) => {
            setTab1value(paneKey)
          }}
          size="small"
        >
          <TabPane title="Tab 1"> Tab 1 </TabPane>
          <TabPane title="Tab 2"> Tab 2 </TabPane>
          <TabPane title="Tab 3"> Tab 3 </TabPane>
        </Tabs>

        <h2>{translated.title8}</h2>
        <Tabs
          value={tab7value}
          titleNode={() => {
            return list6.map((item) => (
              <div
                onClick={() => setTab7value(item.paneKey)}
                className={`nut-tabs__titles-item ${
                  tab7value === item.paneKey ? 'active' : ''
                }`}
                key={item.paneKey}
              >
                {item.icon && <Icon name={item.icon} />}
                <span className="nut-tabs__titles-item__text">
                  {item.title}
                </span>
                <span className="nut-tabs__titles-item__line" />
              </div>
            ))
          }}
        >
          {list6.map((item) => (
            <TabPane key={item.paneKey} paneKey={item.paneKey}>
              {item.title}
            </TabPane>
          ))}
        </Tabs>
      </div>
    </>
  )
}

export default TabsDemo
