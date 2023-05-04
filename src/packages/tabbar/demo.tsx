import React, { useState } from 'react'
import { Cart, Category, Find, Home, My } from '@nutui/icons-react'
import { Tabbar } from './tabbar'
import './demo.scss'
import { useTranslate } from '../../sites/assets/locale'

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
      cfbdc781: '固定底部',
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
      cfbdc781: '固定底部',
      c3a3a1d2: '首頁',
      e51e4582: '我的',
      '7db1a8b2': '購物車',
      a52bef0c: '發現',
      d04fcbda: '分類',
      c9e6df49: '紅點',
    },
    'en-US': {
      ce5c5446: 'Basic Usage',
      c38a08ef: 'Custom DefaultValue',
      ce5c5448: 'Only Icon',
      ce5c5440: 'No Icon',
      b840c88f: 'Logo Tips',
      a74a1fd4: 'Custom Color',
      '8dab2f66': 'Tabbar with customizable number of icons',
      cfbdc781: 'Fixed bottom',
      c3a3a1d2: 'Home',
      e51e4582: 'Mine',
      '7db1a8b2': 'Cart',
      a52bef0c: 'Find',
      d04fcbda: 'Category',
      c9e6df49: 'Dot',
    },
  })

  const [activeIndex, setActiveIndex] = useState(2)

  return (
    <>
      <div className="demo">
        <h2>{translated.ce5c5446}</h2>
        <Tabbar defaultValue={0}>
          <Tabbar.Item
            title={translated.c3a3a1d2}
            icon={<Home width={18} height={18} />}
            value={9}
          />
          <Tabbar.Item
            title={translated.d04fcbda}
            icon={<Category width={18} height={18} />}
            dot
          />
          <Tabbar.Item
            title={translated.a52bef0c}
            icon={<Find width={18} height={18} />}
          />
          <Tabbar.Item
            title={translated['7db1a8b2']}
            icon={<Cart width={18} height={18} />}
          />
          <Tabbar.Item
            title={translated.e51e4582}
            icon={<My width={18} height={18} />}
          />
        </Tabbar>

        <h2>{translated.c38a08ef}</h2>
        <Tabbar
          defaultValue={0}
          value={activeIndex}
          onSwitch={(value) => {
            setActiveIndex(value)
          }}
        >
          <Tabbar.Item
            title={translated.c3a3a1d2}
            icon={<Home width={20} height={20} />}
          />
          <Tabbar.Item
            title={translated.d04fcbda}
            icon={<Category width={20} height={20} />}
          />
          <Tabbar.Item
            title={translated.a52bef0c}
            icon={<Find width={20} height={20} />}
          />
          <Tabbar.Item
            title={translated['7db1a8b2']}
            icon={<Cart width={20} height={20} />}
          />
          <Tabbar.Item
            title={translated.e51e4582}
            icon={<My width={20} height={20} />}
          />
        </Tabbar>

        <h2>{translated.ce5c5448}</h2>
        <Tabbar
          onSwitch={(value) => {
            console.log(value)
          }}
        >
          <Tabbar.Item
            title={translated.c3a3a1d2}
            icon={<Home width={12} height={12} />}
          />
          <Tabbar.Item
            title={translated.d04fcbda}
            icon={<Category width={12} height={12} />}
          />
          <Tabbar.Item icon={<Find width={24} height={24} />} />
          <Tabbar.Item
            title={translated['7db1a8b2']}
            icon={<Cart width={12} height={12} />}
          />
          <Tabbar.Item
            title={translated.e51e4582}
            icon={<My width={12} height={12} />}
          />
        </Tabbar>

        <h2>{translated.ce5c5440}</h2>
        <Tabbar
          onSwitch={(value) => {
            console.log(value)
          }}
        >
          <Tabbar.Item title={translated.c3a3a1d2} value={9} />
          <Tabbar.Item title={translated.d04fcbda} dot />
          <Tabbar.Item title={translated.a52bef0c} />
          <Tabbar.Item title={translated['7db1a8b2']} />
          <Tabbar.Item title={translated.e51e4582} />
        </Tabbar>

        <h2>{translated.b840c88f}</h2>
        <Tabbar>
          <Tabbar.Item
            title={translated.c3a3a1d2}
            icon={<Home width={20} height={20} />}
            value={11}
          />
          <Tabbar.Item
            title={translated.d04fcbda}
            icon={<Category width={20} height={20} />}
          />
          <Tabbar.Item
            title={translated.a52bef0c}
            icon={<Find width={20} height={20} />}
          />
          <Tabbar.Item
            title={translated['7db1a8b2']}
            icon={<Cart width={20} height={20} />}
            value={110}
          />
          <Tabbar.Item
            title={translated.e51e4582}
            icon={<My width={20} height={20} />}
          />
        </Tabbar>

        <h2>{translated.c9e6df49}</h2>
        <Tabbar>
          <Tabbar.Item
            title={translated.c3a3a1d2}
            icon={<Home width={20} height={20} />}
            dot
          />
          <Tabbar.Item
            title={translated.d04fcbda}
            icon={<Category width={20} height={20} />}
          />
          <Tabbar.Item
            title={translated.a52bef0c}
            icon={<Find width={20} height={20} />}
          />
          <Tabbar.Item
            title={translated['7db1a8b2']}
            icon={<Cart width={20} height={20} />}
            dot
          />
          <Tabbar.Item
            title={translated.e51e4582}
            icon={<My width={20} height={20} />}
          />
        </Tabbar>

        <h2>{translated.a74a1fd4}</h2>
        <Tabbar inactiveColor="#7d7e80" activeColor="#1989fa">
          <Tabbar.Item
            title={translated.c3a3a1d2}
            icon={<Home width={20} height={20} />}
          />
          <Tabbar.Item
            title={translated.d04fcbda}
            icon={<Category width={20} height={20} />}
          />
          <Tabbar.Item
            title={translated.a52bef0c}
            icon={<Find width={20} height={20} />}
          />
          <Tabbar.Item
            title={translated['7db1a8b2']}
            icon={<Cart width={20} height={20} />}
          />
          <Tabbar.Item
            title={translated.e51e4582}
            icon={<My width={20} height={20} />}
          />
        </Tabbar>

        <h2>{translated['8dab2f66']}</h2>
        <Tabbar inactiveColor="#7d7e80" activeColor="#1989fa">
          <Tabbar.Item
            title={translated.c3a3a1d2}
            icon={<Home width={20} height={20} />}
          />
          <Tabbar.Item
            title={translated.d04fcbda}
            icon={<Category width={20} height={20} />}
          />
          <Tabbar.Item
            title={translated.a52bef0c}
            icon={<Find width={20} height={20} />}
          />
        </Tabbar>

        <h2 className="bottom-h2">{translated.cfbdc781}</h2>
        <Tabbar fixed>
          <Tabbar.Item
            title={translated.c3a3a1d2}
            icon={<Home width={20} height={20} />}
          />
          <Tabbar.Item
            title={translated.d04fcbda}
            icon={<Category width={20} height={20} />}
          />
          <Tabbar.Item
            title={translated.a52bef0c}
            icon={<Find width={20} height={20} />}
          />
          <Tabbar.Item
            title={translated['7db1a8b2']}
            icon={<Cart width={20} height={20} />}
          />
          <Tabbar.Item
            title={translated.e51e4582}
            icon={<My width={20} height={20} />}
          />
        </Tabbar>
      </div>
    </>
  )
}

export default TabbarDemo
