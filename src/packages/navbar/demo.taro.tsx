import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { NavBar, Tabs, TabPane, Icon } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

interface T {
  ce5c5446: string
  c38a08ef: string
  b840c88f: string
  a74a1fd4: string
  '8dab2f66': string
  cfbdc781: string
  c3a3a1d2: string
  e51e4582: string
  c9e6df49: string
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
      c9e6df49: '自定义导航栏中间内容',
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
      c9e6df49: '自定義導航欄中間內容',
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
      c9e6df49: 'Customize the middle content of the navigation bar',
    },
  })
  const [tab1value, setTab1value] = useState('Tab 1')
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.ce5c5446}</h2>
        <NavBar
          title={translated.c38a08ef}
          leftShow
          leftText={translated.a74a1fd4}
          onClickTitle={(e) => Taro.showToast({ title: translated.b840c88f })}
          onClickBack={(e) => Taro.showToast({ title: translated.a74a1fd4 })}
          onClickRight={(e) => Taro.showToast({ title: 'icon' })}
        >
          <Icon<{ slot: string }> name="share" slot="right" />
        </NavBar>
        <NavBar
          title={translated.e51e4582}
          desc={translated.cfbdc781}
          leftShow
          onClickTitle={(e) => Taro.showToast({ title: translated.b840c88f })}
          onClickBack={(e) => Taro.showToast({ title: translated.a74a1fd4 })}
          onClickRight={(e) => Taro.showToast({ title: translated.cfbdc781 })}
        />
        <NavBar
          title={translated.c3a3a1d2}
          desc={translated['8dab2f66']}
          titIcon="locationg3"
          onClickTitle={(e) => Taro.showToast({ title: translated.b840c88f })}
          onClickRight={(e) =>
            Taro.showToast({ title: translated['8dab2f66'] })
          }
          onClickBack={(e) => Taro.showToast({ title: translated.a74a1fd4 })}
          onClickIcon={(e) => Taro.showToast({ title: 'icon' })}
        >
          <Icon<{ slot: string }> name="more-x" slot="right" />
        </NavBar>
        <NavBar
          title={translated.c38a08ef}
          leftShow
          border
          leftText={translated.a74a1fd4}
          onClickTitle={(e) => Taro.showToast({ title: translated.b840c88f })}
          onClickBack={(e) => Taro.showToast({ title: translated.a74a1fd4 })}
          onClickRight={(e) => Taro.showToast({ title: 'icon' })}
        >
          <Icon<{ slot: string }> name="share" slot="right" />
        </NavBar>
        <h2>{translated.c9e6df49}</h2>
        <NavBar
          desc={translated['8dab2f66']}
          onClickTitle={(e) => Taro.showToast({ title: translated.b840c88f })}
          onClickRight={(e) =>
            Taro.showToast({ title: translated['8dab2f66'] })
          }
          onClickBack={(e) => Taro.showToast({ title: translated.a74a1fd4 })}
          onClickIcon={(e) => Taro.showToast({ title: 'icon' })}
        >
          <div slot="content">
            <Tabs
              value={tab1value}
              onChange={({ paneKey }) => {
                setTab1value(paneKey)
              }}
            >
              <TabPane title="Tab 1"> Tab 1 </TabPane>
              <TabPane title="Tab 2"> Tab 2 </TabPane>
              <TabPane title="Tab 3"> Tab 3 </TabPane>
            </Tabs>
          </div>
          <Icon<{ slot: string }> name="more-x" slot="right" />
        </NavBar>
      </div>
    </>
  )
}

export default NavBarDemo
