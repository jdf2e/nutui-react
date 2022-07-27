import React from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import { NavBar } from '@/packages/nutui.react.taro'

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
  return (
    <>
      <div className="demo">
        <h2>{translated.ce5c5446}</h2>
        <NavBar
          title={translated.c38a08ef}
          icon="share"
          leftShow
          onClickTitle={(e) => alert(translated.b840c88f)}
          onClickBack={(e) => alert(translated.a74a1fd4)}
          onClickIcon={(e) => alert('icon')}
        />
        <NavBar
          title={translated.e51e4582}
          desc={translated.cfbdc781}
          leftShow
          onClickTitle={(e) => alert(translated.b840c88f)}
          onClickBack={(e) => alert(translated.a74a1fd4)}
          onClickClear={(e) => alert(translated.cfbdc781)}
        />
        <NavBar
          title={translated.c3a3a1d2}
          icon="more"
          desc={translated['8dab2f66']}
          titIcon="locationg3"
          onClickTitle={(e) => alert(translated.b840c88f)}
          onClickBack={(e) => alert(translated.a74a1fd4)}
          onClickClear={(e) => alert(translated['8dab2f66'])}
          onClickIcon={(e) => alert('icon')}
        />
      </div>
    </>
  )
}

export default NavBarDemo
