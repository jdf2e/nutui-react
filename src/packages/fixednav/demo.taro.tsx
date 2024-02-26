import React, { useState, MouseEvent } from 'react'
import Taro from '@tarojs/taro'
import { Retweet } from '@nutui/icons-react-taro'
import { FixedNav, Drag } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'

type TFixedNavDemo = {
  title1: string
  title2: string
  title3: string
  title4: string
  title5: string
  title6: string
  home: string
  category: string
  cart: string
  mine: string
}
const FixedNavDemo = () => {
  const [translated] = useTranslate<TFixedNavDemo>({
    'zh-CN': {
      title1: '基础用法',
      title2: '左侧收起',
      title3: '左侧展开',
      title4: '自定义开',
      title5: '自定义关',
      title6: '支持拖拽',
      home: '首页',
      category: '分类',
      cart: '购物车',
      mine: '我的',
    },
    'zh-TW': {
      title1: '基礎用法',
      title2: '左側收起',
      title3: '左側展開',
      title4: '自定義開',
      title5: '自定義關',
      title6: '支持拖拽',
      home: '首頁',
      category: '分類',
      cart: '購物車',
      mine: '我的',
    },
    'en-US': {
      title1: 'Basic usage',
      title2: 'Left collapsed',
      title3: 'Left expansion',
      title4: 'Custom On',
      title5: 'Custom Off',
      title6: 'Support drag and drop',
      home: 'Home',
      category: 'Category',
      cart: 'Cart',
      mine: 'Mine',
    },
  })
  const list = [
    {
      id: 1,
      text: translated.home,
      icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png',
    },
    {
      id: 2,
      text: translated.category,
      icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png',
    },
    {
      id: 3,
      text: translated.cart,
      num: 2,
      icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png',
    },
    {
      id: 4,
      text: translated.mine,
      icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png',
    },
  ]

  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  const [visible5, setVisible5] = useState(false)

  const change1 = (value: any) => {
    setVisible1(value)
  }
  const selected1 = (item: any, event: MouseEvent) => {
    console.log(item, event)
  }

  const change2 = (value: any) => {
    setVisible2(value)
  }
  const selected2 = (item: any, event: MouseEvent) => {
    console.log(item, event)
  }

  const change3 = (value: any) => {
    setVisible3(value)
  }
  const selected3 = (item: any, event: MouseEvent) => {
    console.log(item, event)
  }

  const change4 = (value: any) => {
    setVisible4(value)
  }
  const selected4 = (item: any, event: MouseEvent) => {
    console.log(item, event)
  }

  const change5 = (value: any) => {
    setVisible5(value)
  }
  const selected5 = (item: any, event: MouseEvent) => {
    console.log(item, event)
  }

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <FixedNav
          list={list}
          activeText={translated.title1}
          overlay
          position={{ top: '70px' }}
          onChange={change1}
          visible={visible1}
          onSelect={selected1}
        />
        <FixedNav
          list={list}
          type="left"
          position={{ top: '140px' }}
          visible={visible2}
          activeText={translated.title2}
          inactiveText={translated.title3}
          onChange={change2}
          onSelect={selected2}
        />
        <FixedNav
          list={list}
          position={{ top: '210px' }}
          overlay={false}
          visible={visible3}
          onChange={change3}
          onSelect={selected3}
        />
        <FixedNav
          position={{ top: '280px' }}
          type="left"
          visible={visible4}
          onChange={change4}
          onSelect={selected4}
          content={
            <>
              <Retweet color="#fff" />
              <span className="text">
                {visible4 ? translated.title4 : translated.title5}
              </span>
            </>
          }
        >
          <ul className="nut-fixednav-list">
            <li className="nut-fixednav-list-item">1</li>
            <li className="nut-fixednav-list-item">2</li>
            <li className="nut-fixednav-list-item">3</li>
            <li className="nut-fixednav-list-item">4</li>
            <li className="nut-fixednav-list-item">5</li>
          </ul>
        </FixedNav>
        {/* <!-- 配合 Drag 支持拖拽 ，小程序暂不支持 --> */}
        <Drag
          direction="y"
          style={{ insetInlineEnd: '0px', insetBlockEnd: '240px' }}
        >
          <FixedNav
            list={list}
            inactiveText={translated.title6}
            visible={visible5}
            onChange={change5}
            onSelect={selected5}
          />
        </Drag>
      </div>
    </>
  )
}

export default FixedNavDemo
