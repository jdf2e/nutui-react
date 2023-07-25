import React, { useState } from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Cell from '@/packages/cell'
import Switch from '@/packages/switch'
import Divider from '@/packages/divider'
import Tabbar from '@/packages/tabbar'
import { Tour } from './tour'

import './demo.scss'

interface T {
  title1: string
  title2: string
  title3: string
  title4: string
  title5: string
  clickTry: string
  stepContent1: string
  stepContent2: string
  stepContent3: string
  stepContent4: string
  customContent: string
  btnContent: string
  tabTitle1: string
  tabTitle2: string
  tabTitle3: string
  tabTitle4: string
}
const TourDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      title1: '基础用法',
      title2: '自定义样式',
      title3: '设置偏移量',
      title4: '自定义内容',
      title5: '步骤引导',
      clickTry: '点击试试',
      stepContent1: '70+ 高质量组件，覆盖移动端主流场景',
      stepContent2: '支持一套代码同时开发多端小程序+H5',
      stepContent3: '基于京东APP 10.0 视觉规范',
      stepContent4: '支持定制主题，内置 700+ 个主题变量',
      customContent: 'nutui 4.x 即将发布，敬请期待',
      btnContent: '知道了',
      tabTitle1: '首页',
      tabTitle2: '分类',
      tabTitle3: '购物车',
      tabTitle4: '我的',
    },
    'en-US': {
      title1: 'Basic Usage',
      title2: 'Custom Style',
      title3: 'Custom Offset',
      title4: 'Custom Content',
      title5: 'Steps',
      clickTry: 'click to try',
      stepContent1: '70+ high-quality components',
      stepContent2: 'Support a set of codes to develop',
      stepContent3: 'Based on JD APP 10.0',
      stepContent4: 'Support custom theme, built-in 700+ theme variables',
      customContent: 'nutui 4.x will be released soon, so stay tuned',
      btnContent: 'knew',
      tabTitle1: 'page',
      tabTitle2: 'sort',
      tabTitle3: 'cart',
      tabTitle4: 'mine',
    },
  })

  const [showTour, setShowTour] = useState(false)
  const [showTour1, setShowTour1] = useState(false)
  const [showTour2, setShowTour2] = useState(false)
  const [showTour3, setShowTour3] = useState(false)
  const [showTour4, setShowTour4] = useState(true)
  const steps = [
    {
      content: translated.stepContent1,
      target: 'target',
    },
  ]

  const steps1 = [
    {
      content: translated.stepContent1,
      target: 'target1',
    },
  ]

  const steps2 = [
    {
      content: translated.stepContent2,
      target: 'target2',
      popoverOffset: [40, 12],
      arrowOffset: -36,
    },
  ]

  const steps3 = [
    {
      target: 'target3',
    },
  ]

  const steps4 = [
    {
      content: translated.stepContent1,
      target: 'target4',
    },
    {
      content: translated.stepContent2,
      target: 'target5',
    },
    {
      content: translated.stepContent3,
      target: 'target6',
      location: 'top-end',
    },
    {
      content: translated.stepContent4,
      target: 'target7',
      location: 'top-end',
    },
  ]

  const closeTour = () => {
    setShowTour(false)
  }

  const closeTour1 = () => {
    setShowTour1(false)
  }

  const closeTour2 = () => {
    setShowTour2(false)
  }

  const closeTour3 = () => {
    setShowTour3(false)
  }

  const closeTour4 = () => {
    setShowTour4(false)
  }

  return (
    <>
      <div className="demo">
        <h2>{translated.title1}</h2>
        <Cell
          title={translated.clickTry}
          extra={
            <Switch
              id="target"
              onChange={() => {
                setShowTour(true)
              }}
            />
          }
        />
        <Tour
          className="nut-custom-tour nut-customword-tour"
          visible={showTour}
          onClose={closeTour}
          list={steps}
          type="tile"
          location="bottom-end"
        />

        <h2>{translated.title2}</h2>
        <Cell
          title={translated.clickTry}
          extra={
            <Switch
              id="target1"
              onChange={() => {
                setShowTour1(true)
              }}
            />
          }
        />
        <Tour
          className="nut-custom-tour nut-customword-tour nut-customstyle-tour"
          visible={showTour1}
          onClose={closeTour1}
          list={steps1}
          type="tile"
          location="bottom-end"
          style={{
            '--nutui-popover-content-background-color': 'rgb(255, 0, 0)',
            '--nutui-popover-primary-text-color': 'rgb(255, 255, 255)',
            '--nutui-popover-white-background-color': 'rgb(255, 0, 0)',
          }}
          offset={[0, 0]}
          maskWidth={50}
          maskHeight={50}
        />

        <h2>{translated.title3}</h2>
        <Cell
          title={translated.clickTry}
          onClick={() => {
            setShowTour2(true)
          }}
          extra={
            <div className="tour-demo-img">
              <img
                id="target2"
                src="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
                alt=""
              />
              <img
                src="https://img10.360buyimg.com/imagetools/jfs/t1/31842/40/20385/1762/63998e3eE594254bb/98ff51da635ead4a.png"
                alt=""
              />
              <img
                src="https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png"
                alt=""
              />
            </div>
          }
        />
        <Tour
          className="nut-custom-tour nut-customword-tour"
          visible={showTour2}
          onClose={closeTour2}
          list={steps2}
          type="tile"
          location="bottom-end"
          style={{
            '--nutui-popover-content-background-color': 'rgb(255, 0, 0)',
            '--nutui-popover-primary-text-color': 'rgb(255, 255, 255)',
            '--nutui-popover-white-background-color': 'rgb(255, 0, 0)',
          }}
          offset={[8, 8]}
        />

        <h2>{translated.title4}</h2>
        <Cell
          title={translated.clickTry}
          extra={
            <Switch
              id="target3"
              onChange={() => {
                setShowTour3(true)
              }}
            />
          }
        />
        <Tour
          className="nut-custom-tour nut-customword-tour"
          visible={showTour3}
          onClose={closeTour3}
          list={steps3}
          type="tile"
          location="bottom-end"
          offset={[8, 8]}
          style={{
            '--nutui-popover-content-background-color': 'rgb(75, 76, 77)',
            '--nutui-popover-primary-text-color': 'rgb(255, 255, 255)',
            '--nutui-popover-white-background-color': 'rgb(75, 76, 77)',
          }}
          closeOnOverlayClick={false}
        >
          <div className="tour-demo-custom-content">
            <div>{translated.customContent}</div>
            <Divider direction="vertical" />
            <div
              onClick={() => {
                setShowTour3(false)
              }}
            >
              {translated.btnContent}
            </div>
          </div>
        </Tour>

        <h2>{translated.title5}</h2>
        <Cell
          title={translated.clickTry}
          onClick={() => {
            setShowTour4(true)
          }}
        />
        <Tabbar fixed>
          <Tabbar.Item id="target4" title={translated.tabTitle1} />
          <Tabbar.Item id="target5" title={translated.tabTitle2} />
          <Tabbar.Item id="target6" title={translated.tabTitle3} />
          <Tabbar.Item id="target7" title={translated.tabTitle4} />
        </Tabbar>
        <Tour
          className="nut-custom-tour"
          visible={showTour4}
          onClose={closeTour4}
          list={steps4}
          location="top-start"
          offset={[0, 0]}
          maskWidth={60}
          maskHeight={50}
        />
      </div>
    </>
  )
}

export default TourDemo
