import React, { useState } from 'react'
import { NavBar, TabPane, Tabs, Toast } from '@nutui/nutui-react'
import { ArrowLeft, More } from '@nutui/icons-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo3 = ({ t }: propsType) => {
  const [tab1value, setTab1value] = useState<string | number>('0')
  const [tab2value, setTab2value] = useState<string | number>('0')

  return (
    <>
      <NavBar
        back={<ArrowLeft />}
        right={
          <>
            <span onClick={(e) => Toast.show(t.edit)}>Edit</span>
            <More onClick={(e) => Toast.show('icon')} />
          </>
        }
        onBackClick={(e) => Toast.show(t.back)}
      >
        <div style={{ width: '100%' }}>
          <Tabs
            value={tab1value}
            onChange={(paneKey) => {
              setTab1value(paneKey)
            }}
            style={{
              '--nutui-tabs-titles-gap': 0,
              background: 'transparent',
            }}
          >
            <TabPane title="Tab 1">Tab 1</TabPane>
            <TabPane title="Tab 2">Tab 2</TabPane>
            <TabPane title="Tab 3">Tab 3</TabPane>
          </Tabs>
        </div>
      </NavBar>
      <NavBar
        back={<ArrowLeft />}
        right={
          <>
            <span onClick={(e) => Toast.show(t.edit)}>Edit</span>
            <More onClick={(e) => Toast.show('icon')} />
          </>
        }
        onBackClick={(e) => Toast.show(t.back)}
      >
        <div>
          <Tabs
            className="navbar-tabs"
            align="left"
            activeType="simple"
            value={tab2value}
            onChange={(paneKey) => {
              setTab2value(paneKey)
            }}
          >
            <TabPane title="Tab1">Tab1</TabPane>
            <TabPane title="Tab2">Tab2</TabPane>
          </Tabs>
        </div>
      </NavBar>
    </>
  )
}

export default withTranslation(Demo3)
