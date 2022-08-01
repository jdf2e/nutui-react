import React, { useEffect, useState } from 'react'
import { Tabs } from './tabs'
import TabPane from '../tabpane'
import Icon from '@/packages/icon'

const TabsDemo = () => {
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
      title: '自定义 1',
      paneKey: 'c1',
      icon: 'dongdong',
    },
    {
      title: '自定义 2',
      paneKey: 'c2',
      icon: 'JD',
    },
    {
      title: '自定义 3',
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
        <h2>基础用法</h2>
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
        <h2>基础用法-微笑曲线</h2>
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
        <h2>通过 pane-key 匹配</h2>
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
        <h2>Tabpane 自动高度</h2>
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
        <h2>数据异步渲染 3s</h2>
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
        <h2>数量多,滚动操作</h2>
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
        <h2>左右布局</h2>
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
        <h2>左右布局-微笑曲线</h2>
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
        <h2>标签栏字体尺寸 large normal small </h2>
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

        <h2>自定义标签栏</h2>
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
