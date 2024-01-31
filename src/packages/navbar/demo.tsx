import React, { useState } from 'react'
import { Share, More, Cart, ArrowLeft, Close } from '@nutui/icons-react'
import { NavBar } from './navbar'
import './demo.scss'
import { Tabs } from '../tabs/tabs'
import { TabPane } from '../tabpane/tabpane'
import { useTranslate } from '../../sites/assets/locale'
import Toast from '../toast/toast'

interface T {
  ce5c5446: string
  c38a08ef: string
  b840c88f: string
  a74a1fd4: string
  '8dab2f66': string
  cfbdc781: string
  c3a3a1d2: string
  e51e4582: string
}

const NavBarDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      ce5c5446: '基础用法',
      c38a08ef: '订单详情',
      b840c88f: '标题',
      a74a1fd4: '返回',
      '8dab2f66': '编辑',
      cfbdc781: '清空',
      c3a3a1d2: '购物车',
      e51e4582: '浏览记录',
    },
    'zh-TW': {
      ce5c5446: '基礎用法',
      c38a08ef: '訂單詳情',
      b840c88f: '標題',
      a74a1fd4: '返回',
      '8dab2f66': '編輯',
      cfbdc781: '清空',
      c3a3a1d2: '購物車',
      e51e4582: '瀏覽記錄',
    },
    'en-US': {
      ce5c5446: 'Basic Usage',
      c38a08ef: 'Order Details',
      b840c88f: 'Title',
      a74a1fd4: 'Back',
      '8dab2f66': 'Edit',
      cfbdc781: 'Empty',
      c3a3a1d2: 'Shopping Cart',
      e51e4582: 'Browsing History',
    },
  })
  const [tab1value, setTab1value] = useState<string | number>('0')
  const [tab2value, setTab2value] = useState<string | number>('0')
  return (
    <>
      <div className="demo">
        <h2>{translated.ce5c5446}</h2>
        <NavBar
          back={
            <>
              <ArrowLeft />
              {translated.a74a1fd4}
            </>
          }
          right={
            <span className="flex-center" onClick={(e) => Toast.show('icon')}>
              <Share />
            </span>
          }
          onBackClick={(e) => Toast.show(translated.a74a1fd4)}
        >
          {translated.c38a08ef}
        </NavBar>
        <NavBar
          right={
            <span className="flex-center" onClick={(e) => Toast.show('icon')}>
              <Share />
            </span>
          }
          onBackClick={(e) => Toast.show(translated.a74a1fd4)}
        >
          {translated.c38a08ef}
        </NavBar>
        <NavBar
          right={
            <span onClick={(e) => Toast.show(translated.cfbdc781)}>
              {translated.cfbdc781}
            </span>
          }
          left={<Close />}
          back={<ArrowLeft />}
          onBackClick={(e) => Toast.show(translated.a74a1fd4)}
        >
          <div className="title">
            <span onClick={(e) => Toast.show(translated.b840c88f)}>
              {translated.e51e4582}
            </span>
            <span className="desc">{translated.e51e4582}</span>
          </div>
        </NavBar>
        <NavBar
          back={<ArrowLeft />}
          right={
            <>
              <span onClick={(e) => Toast.show(translated['8dab2f66'])}>
                {translated['8dab2f66']}
              </span>
              <More onClick={(e) => Toast.show('icon')} />
            </>
          }
          onBackClick={(e) => Toast.show(translated.a74a1fd4)}
        >
          <span onClick={(e) => Toast.show(translated.b840c88f)}>
            {translated.c3a3a1d2}
          </span>
          <i
            style={{ marginLeft: '5px' }}
            className="flex-center"
            onClick={(e) => Toast.show('icon')}
          >
            <Cart />
          </i>
        </NavBar>
        <NavBar
          back={<ArrowLeft />}
          right={
            <>
              <span onClick={(e) => Toast.show(translated['8dab2f66'])}>
                {translated['8dab2f66']}
              </span>
              <More onClick={(e) => Toast.show('icon')} />
            </>
          }
          onBackClick={(e) => Toast.show(translated.a74a1fd4)}
        >
          <div style={{ width: '100%' }}>
            <Tabs
              value={tab1value}
              onChange={(paneKey) => {
                setTab1value(paneKey)
              }}
              style={{
                '--nutui-tabs-titles-padding': 0,
                '--nutui-tabs-titles-gap': 0,
              }}
            >
              <TabPane title="Tab 1"> Tab 1 </TabPane>
              <TabPane title="Tab 2"> Tab 2 </TabPane>
              <TabPane title="Tab 3"> Tab 3 </TabPane>
              <TabPane title="Tab 4"> Tab 4 </TabPane>
            </Tabs>
          </div>
        </NavBar>
        <NavBar
          titleAlign="left"
          back={
            <>
              <ArrowLeft />
              {translated.a74a1fd4}
            </>
          }
          right={
            <span className="flex-center" onClick={(e) => Toast.show('icon')}>
              <Share />
            </span>
          }
          onBackClick={(e) => Toast.show(translated.a74a1fd4)}
        >
          {translated.c38a08ef}
        </NavBar>
        <NavBar
          titleAlign="left"
          right={
            <span className="flex-center" onClick={(e) => Toast.show('icon')}>
              <Share />
            </span>
          }
          onBackClick={(e) => Toast.show(translated.a74a1fd4)}
        >
          {translated.c38a08ef}
        </NavBar>

        <NavBar
          titleAlign="left"
          right={
            <span onClick={(e) => Toast.show(translated.cfbdc781)}>
              {translated.cfbdc781}
            </span>
          }
          left={<Close />}
          back={<ArrowLeft />}
          onBackClick={(e) => Toast.show(translated.a74a1fd4)}
        >
          <div className="title title-left">
            <span onClick={(e) => Toast.show(translated.b840c88f)}>
              {translated.e51e4582}
            </span>
            <span className="desc">{translated.e51e4582}</span>
          </div>
        </NavBar>
        <NavBar
          titleAlign="left"
          back={<ArrowLeft />}
          right={
            <>
              <span onClick={(e) => Toast.show(translated['8dab2f66'])}>
                {translated['8dab2f66']}
              </span>
              <More onClick={(e) => Toast.show('icon')} />
            </>
          }
          onBackClick={(e) => Toast.show(translated.a74a1fd4)}
        >
          <span onClick={(e) => Toast.show(translated.b840c88f)}>
            {translated.c3a3a1d2}
          </span>
          <i
            style={{ marginLeft: '5px' }}
            className="flex-center"
            onClick={(e) => Toast.show('icon')}
          >
            <Cart />
          </i>
        </NavBar>
        <NavBar
          titleAlign="left"
          back={<ArrowLeft />}
          right={
            <>
              <span onClick={(e) => Toast.show(translated['8dab2f66'])}>
                {translated['8dab2f66']}
              </span>
              <More onClick={(e) => Toast.show('icon')} />
            </>
          }
          onBackClick={(e) => Toast.show(translated.a74a1fd4)}
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
              <TabPane title="Tab1"> Tab1 </TabPane>
              <TabPane title="Tab2"> Tab2 </TabPane>
              <TabPane title="Tab3"> Tab3 </TabPane>
            </Tabs>
          </div>
        </NavBar>
      </div>
    </>
  )
}

export default NavBarDemo
