import React, { useState } from 'react'
import Cell from '@/packages/cell'
import Switch from '@/packages/switch'
import Divider from '@/packages/divider'
import Tabbar from '@/packages/tabbar'
import { Tour } from './tour'

import './demo.scss'

const TourDemo = () => {
  const [showTour, setShowTour] = useState(false)
  const [showTour1, setShowTour1] = useState(false)
  const [showTour2, setShowTour2] = useState(false)
  const [showTour3, setShowTour3] = useState(false)
  const [showTour4, setShowTour4] = useState(false)
  const steps = [
    {
      content: '70+ 高质量组件，覆盖移动端主流场景',
      target: 'target',
    },
  ]

  const steps1 = [
    {
      content: '70+ 高质量组件，覆盖移动端主流场景',
      target: 'target1',
    },
  ]

  const steps2 = [
    {
      content: '支持一套代码同时开发多端小程序+H5',
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
      content: '70+ 高质量组件，覆盖移动端主流场景',
      target: 'target4',
    },
    {
      content: '支持一套代码同时开发多端小程序+H5',
      target: 'target5',
    },
    {
      content: '基于京东APP 10.0 视觉规范',
      target: 'target6',
      location: 'top-end',
    },
    {
      content: '支持定制主题，内置 700+ 个主题变量',
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
        <h2>基础用法</h2>
        <Cell
          title="点击试试"
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
          isShowModel={showTour}
          onClose={closeTour}
          steps={steps}
          type="tile"
          location="bottom-end"
        />

        <h2>自定义样式</h2>
        <Cell
          title="点击试试"
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
          isShowModel={showTour1}
          onClose={closeTour1}
          steps={steps1}
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

        <h2>设置偏移量</h2>
        <Cell
          title="点击试试"
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
          isShowModel={showTour2}
          onClose={closeTour2}
          steps={steps2}
          type="tile"
          location="bottom-end"
          style={{
            '--nutui-popover-content-background-color': 'rgb(255, 0, 0)',
            '--nutui-popover-primary-text-color': 'rgb(255, 255, 255)',
            '--nutui-popover-white-background-color': 'rgb(255, 0, 0)',
          }}
          offset={[8, 8]}
        />

        <h2>自定义内容</h2>
        <Cell
          title="点击试试"
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
          isShowModel={showTour3}
          onClose={closeTour3}
          steps={steps3}
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
            <div>nutui 4.x 即将发布，敬请期待</div>
            <Divider direction="vertical" />
            <div
              onClick={() => {
                setShowTour3(false)
              }}
            >
              知道了
            </div>
          </div>
        </Tour>

        <h2>步骤引导</h2>
        <Cell
          title="点击试试"
          onClick={() => {
            setShowTour4(true)
          }}
        />
        <Tabbar fixed>
          <Tabbar.Item id="target4" title="首页" />
          <Tabbar.Item id="target5" title="分类" />
          <Tabbar.Item id="target6" title="购物车" />
          <Tabbar.Item id="target7" title="我的" />
        </Tabbar>
        <Tour
          className="nut-custom-tour"
          isShowModel={showTour4}
          onClose={closeTour4}
          steps={steps4}
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
