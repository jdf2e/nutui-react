import React, { useState } from 'react'
import { Share, MoreX, Cart2, Left, Close } from '@nutui/icons-react'
import { NavBar } from './navbar'
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
      ce5c5446: 'Basic usage',
      c38a08ef: 'order details',
      b840c88f: 'title',
      a74a1fd4: 'return',
      '8dab2f66': 'edit',
      cfbdc781: 'empty',
      c3a3a1d2: 'shopping cart',
      e51e4582: 'Browsing history',
    },
  })
  const [tab1value, setTab1value] = useState<string | number>('0')
  return (
    <>
      <div className="demo">
        <h2>{translated.ce5c5446}</h2>
        <NavBar
          back={
            <>
              <Left name="left" color="#979797" />
              {translated.a74a1fd4}
            </>
          }
          left={<Close width={12} />}
          right={
            <span onClick={(e) => Toast.show('icon')}>
              <Share />
            </span>
          }
          onBackClick={(e) => Toast.show(translated.a74a1fd4)}
        >
          <span onClick={(e) => Toast.show(translated.b840c88f)}>
            {translated.c38a08ef}
          </span>
        </NavBar>

        <NavBar
          right={
            <span onClick={(e) => Toast.show(translated.cfbdc781)}>
              {translated.cfbdc781}
            </span>
          }
          back={<Left name="left" color="#979797" />}
          onBackClick={(e) => Toast.show(translated.a74a1fd4)}
        >
          <span onClick={(e) => Toast.show(translated.b840c88f)}>
            {translated.e51e4582}
          </span>
        </NavBar>
        <NavBar
          back={<Left name="left" color="#979797" />}
          right={
            <>
              <span onClick={(e) => Toast.show(translated['8dab2f66'])}>
                {translated['8dab2f66']}
              </span>
              <MoreX onClick={(e) => Toast.show('icon')} />
            </>
          }
          onBackClick={(e) => Toast.show(translated.a74a1fd4)}
        >
          <span onClick={(e) => Toast.show(translated.b840c88f)}>
            {translated.c3a3a1d2}
          </span>
          <i style={{ marginLeft: '5px' }} onClick={(e) => Toast.show('icon')}>
            <Cart2 />
          </i>
        </NavBar>

        <NavBar
          back={<Left name="left" color="#979797" />}
          right={
            <>
              <span onClick={(e) => Toast.show(translated['8dab2f66'])}>
                {translated['8dab2f66']}
              </span>
              <MoreX onClick={(e) => Toast.show('icon')} />
            </>
          }
          onBackClick={(e) => Toast.show(translated.a74a1fd4)}
        >
          <div slot="content">
            <Tabs
              value={tab1value}
              onChange={(paneKey) => {
                setTab1value(paneKey)
              }}
            >
              <TabPane title="Tab 1"> Tab 1 </TabPane>
              <TabPane title="Tab 2"> Tab 2 </TabPane>
              <TabPane title="Tab 3"> Tab 3 </TabPane>
            </Tabs>
          </div>
          <i slot="right">
            <MoreX />
          </i>
        </NavBar>
      </div>
    </>
  )
}

export default NavBarDemo
