import React, { useState, MouseEvent } from 'react'
import { useTranslate } from '../../sites/assets/locale'
import { Icon } from '../icon/icon'
import { FixedNav } from './fixednav'
import Drag from '../drag'

type TFixedNavDemo = {
  title1: string
  title2: string
  title3: string
  title4: string
  title5: string
  title6: string
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
    },
    'zh-TW': {
      title1: '基礎用法',
      title2: '左側收起',
      title3: '左側展開',
      title4: '自定義開',
      title5: '自定義關',
      title6: '支持拖拽',
    },
    'en-US': {
      title1: 'Basic usage',
      title2: 'Left collapsed',
      title3: 'Left expansion',
      title4: 'Custom On',
      title5: 'Custom Off',
      title6: 'Support drag and drop',
    },
  })
  const navList = [
    {
      id: 1,
      text: '首页',
      icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png',
    },
    {
      id: 2,
      text: '分类',
      icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png',
    },
    {
      id: 3,
      text: '购物车',
      num: 2,
      icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png',
    },
    {
      id: 4,
      text: '我的',
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
      <div className="demo">
        <FixedNav
          navList={navList}
          activeText={translated.title1}
          overlay
          position={{ top: '70px' }}
          onChange={change1}
          visible={visible1}
          onSelected={selected1}
        />
        <FixedNav
          navList={navList}
          type="left"
          position={{ top: '140px' }}
          visible={visible2}
          activeText={translated.title2}
          unActiveText={translated.title3}
          onChange={change2}
          onSelected={selected2}
        />
        <FixedNav
          navList={navList}
          position={{ top: '210px' }}
          overlay={false}
          visible={visible3}
          onChange={change3}
          onSelected={selected3}
        />
        <FixedNav
          position={{ top: '280px' }}
          type="left"
          visible={visible4}
          onChange={change4}
          onSelected={selected4}
          slotList={
            <ul className="nut-fixednav__list" slot="list">
              <li className="nut-fixednav__list-item">1</li>
              <li className="nut-fixednav__list-item">2</li>
              <li className="nut-fixednav__list-item">3</li>
              <li className="nut-fixednav__list-item">4</li>
              <li className="nut-fixednav__list-item">5</li>
            </ul>
          }
          slotBtn={
            <>
              <Icon name="retweet" color="#fff">
                {' '}
              </Icon>
              <span className="text">
                {visible4 ? translated.title4 : translated.title5}
              </span>
            </>
          }
        />
        {/* <!-- 配合 Drag 支持拖拽 ，小程序暂不支持 --> */}
        <Drag direction="y" style={{ right: '0px', bottom: '240px' }}>
          <FixedNav
            navList={navList}
            unActiveText={translated.title6}
            visible={visible5}
            onChange={change5}
            onSelected={selected5}
          />
        </Drag>
      </div>
    </>
  )
}

export default FixedNavDemo
