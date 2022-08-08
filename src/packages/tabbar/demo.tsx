import React from 'react'
import { Tabbar } from './tabbar'
import TabbarItem from '../tabbaritem'
import { useTranslate } from '../../sites/assets/locale'

interface T {
  ce5c5446: string
  c38a08ef: string
  b840c88f: string
  a74a1fd4: string
  '8dab2f66': string
  cfbdc781: string
  c3a3a1d2: string
  e51e4582: string
  '7db1a8b2': string
  a52bef0c: string
  d04fcbda: string
}

const TabbarDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      ce5c5446: '基础用法',
      c38a08ef: '自定义选中',
      b840c88f: '徽标提示',
      a74a1fd4: '自定义颜色',
      '8dab2f66': '三个icon的tabbar',
      cfbdc781: '固定底部，可自由跳转',
      c3a3a1d2: '首页',
      e51e4582: '我的',
      '7db1a8b2': '购物车',
      a52bef0c: '发现',
      d04fcbda: '分类',
    },
    'zh-TW': {
      ce5c5446: '基礎用法',
      c38a08ef: '自定義選中',
      b840c88f: '徽標提示',
      a74a1fd4: '自定義顏色',
      '8dab2f66': '三個icon的tabbar',
      cfbdc781: '固定底部，可自由跳轉',
      c3a3a1d2: '首頁',
      e51e4582: '我的',
      '7db1a8b2': '購物車',
      a52bef0c: '發現',
      d04fcbda: '分類',
    },
    'en-US': {
      ce5c5446: 'Basic usage',
      c38a08ef: 'custom check',
      b840c88f: 'Logo Tips',
      a74a1fd4: 'custom color',
      '8dab2f66': 'Tabbar with three icons',
      cfbdc781: 'Fixed bottom, free to jump',
      c3a3a1d2: 'front page',
      e51e4582: 'mine',
      '7db1a8b2': 'shopping cart',
      a52bef0c: 'Find',
      d04fcbda: 'Classification',
    },
  })
  return (
    <>
      <div className="demo">
        <h2>{translated.ce5c5446}</h2>
        <Tabbar
          tabSwitch={(child, idx) => {
            console.log(idx)
          }}
        >
          <TabbarItem tabTitle={translated.c3a3a1d2} icon="home" />
          <TabbarItem tabTitle={translated.d04fcbda} icon="category" />
          <TabbarItem tabTitle={translated.a52bef0c} icon="find" />
          <TabbarItem tabTitle={translated['7db1a8b2']} icon="cart" />
          <TabbarItem tabTitle={translated.e51e4582} icon="my" />
        </Tabbar>

        <h2>{translated.c38a08ef}</h2>
        <Tabbar visible={2}>
          <TabbarItem tabTitle={translated.c3a3a1d2} icon="home" />
          <TabbarItem tabTitle={translated.d04fcbda} icon="category" />
          <TabbarItem tabTitle={translated.a52bef0c} icon="find" />
          <TabbarItem tabTitle={translated['7db1a8b2']} icon="cart" />
          <TabbarItem tabTitle={translated.e51e4582} icon="my" />
        </Tabbar>

        <h2>{translated.b840c88f}</h2>
        <Tabbar>
          <TabbarItem tabTitle={translated.c3a3a1d2} icon="home" num="11" />
          <TabbarItem tabTitle={translated.d04fcbda} icon="category" />
          <TabbarItem tabTitle={translated.a52bef0c} icon="find" />
          <TabbarItem tabTitle={translated['7db1a8b2']} icon="cart" num="110" />
          <TabbarItem tabTitle={translated.e51e4582} icon="my" />
        </Tabbar>

        <h2>{translated.a74a1fd4}</h2>
        <Tabbar unactiveColor="#7d7e80" activeColor="#1989fa">
          <TabbarItem tabTitle={translated.c3a3a1d2} icon="home" />
          <TabbarItem tabTitle={translated.d04fcbda} icon="category" />
          <TabbarItem tabTitle={translated.a52bef0c} icon="find" />
          <TabbarItem tabTitle={translated['7db1a8b2']} icon="cart" />
          <TabbarItem tabTitle={translated.e51e4582} icon="my" />
        </Tabbar>

        <h2>{translated['8dab2f66']}</h2>
        <Tabbar unactiveColor="#7d7e80" activeColor="#1989fa">
          <TabbarItem tabTitle={translated.c3a3a1d2} icon="home" />
          <TabbarItem tabTitle={translated.d04fcbda} icon="category" />
          <TabbarItem tabTitle={translated.a52bef0c} icon="find" />
        </Tabbar>

        <h2>{translated.cfbdc781}</h2>
        <Tabbar bottom>
          <TabbarItem tabTitle={translated.c3a3a1d2} href="" icon="home" />
          <TabbarItem tabTitle={translated.d04fcbda} icon="category" />
          <TabbarItem tabTitle={translated.a52bef0c} icon="find" />
          <TabbarItem
            tabTitle={translated['7db1a8b2']}
            href="https://m.jd.com"
            icon="cart"
          />
          <TabbarItem tabTitle={translated.e51e4582} to="/" icon="my" />
        </Tabbar>
      </div>
    </>
  )
}

export default TabbarDemo
