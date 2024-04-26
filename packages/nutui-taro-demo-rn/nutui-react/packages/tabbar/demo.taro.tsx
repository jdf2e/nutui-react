import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'
import Demo7 from './demos/taro/demo7'
import Demo8 from './demos/taro/demo8'
import Demo9 from './demos/taro/demo9'

const TabbarDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      ce5c5446: '基础用法',
      c38a08ef: '自定义选中',
      ce5c5448: '只配图标',
      ce5c5440: '无图标',
      b840c88f: '徽标提示',
      a74a1fd4: '自定义颜色',
      '8dab2f66': '可自定义icon个数的tabbar',
      cfbdc781: '固定底部',
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
      c9e6df49: '紅點',
    },
    'en-US': {
      ce5c5446: 'Basic Usage',
      c38a08ef: 'Custom DefaultValue',
      ce5c5448: 'Only Icon',
      ce5c5440: 'No Icon',
      b840c88f: 'Logo Tips',
      a74a1fd4: 'Custom Color',
      '8dab2f66': 'Tabbar With Custom Number Of Icons',
      cfbdc781: 'Fixed Bottom',
      c9e6df49: 'Dot',
    },
  })
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.ce5c5446}</h2>
        <Demo1 />
        <h2>{translated.c38a08ef}</h2>
        <Demo2 />
        <h2>{translated.ce5c5448}</h2>
        <Demo3 />
        <h2>{translated.ce5c5440}</h2>
        <Demo4 />
        <h2>{translated.b840c88f}</h2>
        <Demo5 />
        <h2>{translated.c9e6df49}</h2>
        <Demo6 />
        <h2>{translated.a74a1fd4}</h2>
        <Demo7 />
        <h2>{translated['8dab2f66']}</h2>
        <Demo8 />
        <h2 style={{ marginBottom: '100px' }}>{translated.cfbdc781}</h2>
        <Demo9 />
      </div>
    </>
  )
}

export default TabbarDemo
