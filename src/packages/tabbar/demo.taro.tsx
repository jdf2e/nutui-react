import React from 'react'
import Taro from '@tarojs/taro'
import { Cart, Category, Find, Home, My } from '@nutui/icons-react-taro'
import { TabbarItem, Tabbar } from '@/packages/nutui.react.taro'
import '@/packages/tabbar/demo.scss'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'

interface T {
  ce5c5446: string
  c38a08ef: string
  ce5c5448: string
  ce5c5440: string
  b840c88f: string
  a74a1fd4: string
  '8dab2f66': string
  cfbdc781: string
  c3a3a1d2: string
  e51e4582: string
  '7db1a8b2': string
  a52bef0c: string
  d04fcbda: string
  c9e6df49: string
}

const TabbarDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      ce5c5446: '基础用法',
      c38a08ef: '自定义选中',
      ce5c5448: '只配图标',
      ce5c5440: '无图标',
      b840c88f: '徽标提示',
      a74a1fd4: '自定义颜色',
      '8dab2f66': '可自定义icon个数的tabbar',
      cfbdc781: '固定底部，可自由跳转',
      c3a3a1d2: '首页',
      e51e4582: '我的',
      '7db1a8b2': '购物车',
      a52bef0c: '发现',
      d04fcbda: '分类',
      c9e6df49: '红点',
    },
    'zh-TW': {
      ce5c5446: '基礎用法',
      c38a08ef: '自定義選中',
      ce5c5448: '只配图标',
      ce5c5440: '无图标',
      b840c88f: '徽標提示',
      a74a1fd4: '自定義顏色',
      '8dab2f66': '可自定義icon個數的tabbar',
      cfbdc781: '固定底部，可自由跳轉',
      c3a3a1d2: '首頁',
      e51e4582: '我的',
      '7db1a8b2': '購物車',
      a52bef0c: '發現',
      d04fcbda: '分類',
      c9e6df49: '紅點',
    },
    'en-US': {
      ce5c5446: 'Basic usage',
      c38a08ef: 'custom check',
      ce5c5448: 'some only Icon',
      ce5c5440: 'no icon',
      b840c88f: 'Logo Tips',
      a74a1fd4: 'custom color',
      '8dab2f66': 'Tabbar with customizable number of icons',
      cfbdc781: 'Fixed bottom, free to jump',
      c3a3a1d2: 'first',
      e51e4582: 'mine',
      '7db1a8b2': 'cart',
      a52bef0c: 'Find',
      d04fcbda: 'Classification',
      c9e6df49: 'Red dot',
    },
  })
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.ce5c5446}</h2>
        <Tabbar
          onSwitch={(child, idx) => {
            console.log(idx)
          }}
        >
          <TabbarItem title={translated.c3a3a1d2} icon={<Home size={18} />} />
          <TabbarItem
            title={translated.d04fcbda}
            icon={<Category size={18} />}
          />
          <TabbarItem title={translated.a52bef0c} icon={<Find size={18} />} />
          <TabbarItem
            title={translated['7db1a8b2']}
            icon={<Cart size={18} />}
          />
          <TabbarItem title={translated.e51e4582} icon={<My size={18} />} />
        </Tabbar>

        <h2>{translated.c38a08ef}</h2>
        <Tabbar visible={2}>
          <TabbarItem
            title={translated.c3a3a1d2}
            icon={<Home width={20} height={20} />}
          />
          <TabbarItem
            title={translated.d04fcbda}
            icon={<Category width={20} height={20} />}
          />
          <TabbarItem
            title={translated.a52bef0c}
            icon={<Find width={20} height={20} />}
          />
          <TabbarItem
            title={translated['7db1a8b2']}
            icon={<Cart width={20} height={20} />}
          />
          <TabbarItem
            title={translated.e51e4582}
            icon={<My width={20} height={20} />}
          />
        </Tabbar>

        <h2>{translated.ce5c5448}</h2>
        <Tabbar
          onSwitch={(child, idx) => {
            console.log(idx)
          }}
        >
          <TabbarItem title={translated.c3a3a1d2} icon={<Home size={12} />} />
          <TabbarItem
            title={translated.d04fcbda}
            icon={<Category size={12} />}
          />
          <TabbarItem icon={<Find size={24} />} />
          <TabbarItem
            title={translated['7db1a8b2']}
            icon={<Cart size={12} />}
          />
          <TabbarItem title={translated.e51e4582} icon={<My size={12} />} />
        </Tabbar>

        <h2>{translated.ce5c5440}</h2>
        <Tabbar
          onSwitch={(child, idx) => {
            console.log(idx)
          }}
        >
          <TabbarItem title={translated.c3a3a1d2} />
          <TabbarItem title={translated.d04fcbda} />
          <TabbarItem title={translated.a52bef0c} />
          <TabbarItem title={translated['7db1a8b2']} />
          <TabbarItem title={translated.e51e4582} />
        </Tabbar>

        <h2>{translated.b840c88f}</h2>
        <Tabbar>
          <TabbarItem
            title={translated.c3a3a1d2}
            icon={<Home width={20} height={20} />}
            num="11"
          />
          <TabbarItem
            title={translated.d04fcbda}
            icon={<Category width={20} height={20} />}
          />
          <TabbarItem
            title={translated.a52bef0c}
            icon={<Find width={20} height={20} />}
          />
          <TabbarItem
            title={translated['7db1a8b2']}
            icon={<Cart width={20} height={20} />}
            num="110"
          />
          <TabbarItem
            title={translated.e51e4582}
            icon={<My width={20} height={20} />}
          />
        </Tabbar>

        <h2>{translated.c9e6df49}</h2>
        <Tabbar>
          <TabbarItem
            title={translated.c3a3a1d2}
            icon={<Home width={20} height={20} />}
            dot
          />
          <TabbarItem
            title={translated.d04fcbda}
            icon={<Category width={20} height={20} />}
          />
          <TabbarItem
            title={translated.a52bef0c}
            icon={<Find width={20} height={20} />}
          />
          <TabbarItem
            title={translated['7db1a8b2']}
            icon={<Cart width={20} height={20} />}
            dot
          />
          <TabbarItem
            title={translated.e51e4582}
            icon={<My width={20} height={20} />}
          />
        </Tabbar>

        <h2>{translated.a74a1fd4}</h2>
        <Tabbar unactiveColor="#7d7e80" activeColor="#1989fa">
          <TabbarItem
            title={translated.c3a3a1d2}
            icon={<Home width={20} height={20} />}
          />
          <TabbarItem
            title={translated.d04fcbda}
            icon={<Category width={20} height={20} />}
          />
          <TabbarItem
            title={translated.a52bef0c}
            icon={<Find width={20} height={20} />}
          />
          <TabbarItem
            title={translated['7db1a8b2']}
            icon={<Cart width={20} height={20} />}
          />
          <TabbarItem
            title={translated.e51e4582}
            icon={<My width={20} height={20} />}
          />
        </Tabbar>

        <h2>{translated['8dab2f66']}</h2>
        <Tabbar unactiveColor="#7d7e80" activeColor="#1989fa">
          <TabbarItem
            title={translated.c3a3a1d2}
            icon={<Home width={20} height={20} />}
          />
          <TabbarItem
            title={translated.d04fcbda}
            icon={<Category width={20} height={20} />}
          />
          <TabbarItem
            title={translated.a52bef0c}
            icon={<Find width={20} height={20} />}
          />
        </Tabbar>

        <h2 className="bottom-h2">{translated.cfbdc781}</h2>
        <Tabbar safeAreaInsetBottom>
          <TabbarItem
            title={translated.c3a3a1d2}
            href=""
            icon={<Home width={20} height={20} />}
          />
          <TabbarItem
            title={translated.d04fcbda}
            icon={<Category width={20} height={20} />}
          />
          <TabbarItem
            title={translated.a52bef0c}
            icon={<Find width={20} height={20} />}
          />
          <TabbarItem
            title={translated['7db1a8b2']}
            // href="https://m.jd.com"
            icon={<Cart width={20} height={20} />}
          />
          <TabbarItem
            title={translated.e51e4582}
            to="/pages/index/index"
            icon={<My width={20} height={20} />}
          />
        </Tabbar>
      </div>
    </>
  )
}

export default TabbarDemo
