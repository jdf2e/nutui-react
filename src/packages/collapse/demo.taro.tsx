import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { Checked, DownArrow, HeartFill, Star } from '@nutui/icons-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Collapse, Button } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

interface itemObj {
  title: string
  name: string
  data: string
}
interface T {
  header1: string
  header2: string
  header3: string
  header4: string
  header5: string
  header6: string
  title1: string
  title2: string
  title3: string
  content1: string
  content2: string
  content3: string
  extra: string
  buttonTextOne: string
  buttonTextSec: string
}
const CollapseDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      header1: '基础用法',
      header2: '无icon样式，绑定点击事件',
      header3: '手风琴模式',
      header4: '自定义折叠图标',
      header5: '自定义 title 与 extra',
      header6: '动态改变数据',
      title1: '标题1',
      title2: '标题2',
      title3: '标题3',
      content1: 'NutUI-React是一套拥有京东风格的轻量级的 React 组件库',
      content2: '在产品的功能、体验、易用性和灵活性等各个方面做了全面的升级！',
      content3: '全面使用 TypeScipt',
      extra: '文本内容',
      buttonTextOne: '改变数据',
      buttonTextSec: '还原数据',
    },
    'zh-TW': {
      header1: '基礎用法',
      header2: '無icon樣式，綁定點擊事件',
      header3: '手風琴模式',
      header4: '自定義折疊圖標',
      header5: '自定義 title & extra',
      header6: '動態改變數據',
      title1: '標題1',
      title2: '標題2',
      title3: '標題3',
      content1: 'Nutui-React 是一套擁有京東風格的輕量級的 React 組件庫',
      content2: '在產品的功能、體驗、易用性和靈活性等各個方面做了全面的升級',
      content3: '全面使用 TypeScipt',
      extra: '文本內容',
      buttonTextOne: '改變數據',
      buttonTextSec: '還原數據',
    },
    'en-US': {
      header1: 'Basic Usage',
      header2: 'No icon style',
      header3: 'accordion Mode',
      header4: 'Custom collapse Icon',
      header5: 'Custom title & extra',
      header6: 'Change Data',
      title1: 'title1',
      title2: 'title2',
      title3: 'title3',
      content1:
        'Nutui-React is a lightweight React component library with JD style',
      content2:
        'The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!',
      content3: 'Full use of typescipt',
      extra: 'text content',
      buttonTextOne: 'change data',
      buttonTextSec: 'return data',
    },
  })

  const oldDate = [
    {
      title: translated.title1,
      name: '1',
      data: translated.content1,
    },
    {
      title: translated.title2,
      name: '2',
      data: translated.content1,
    },
    {
      title: translated.title3,
      name: '3',
      data: translated.content1,
    },
  ]

  const newDate = [
    {
      title: `${translated.title1}1`,
      name: '1',
      data: translated.content2,
    },
    {
      title: `${translated.title2}2`,
      name: '2',
      data: translated.content2,
    },
    {
      title: `${translated.title3}3`,
      name: '3',
      data: translated.content2,
    },
  ]

  const [currIndex, setCurrIndex] = useState(2)
  const [domData, setDomData] = useState(oldDate)

  useEffect(() => {
    setDomData(oldDate)
  }, [translated])

  const changeEnv = (isOpen: boolean, name: string) => {
    console.log(isOpen, name)
  }
  const changeNewData = () => {
    setDomData(newDate)
    setCurrIndex(3)
  }
  const changeOldData = () => {
    setDomData(oldDate)
    setCurrIndex(2)
  }
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>translated.header1</h2>
        <Collapse activeKey={['1', '2']} expandIcon={<DownArrow />}>
          <Collapse.Item title={translated.title1} name="1">
            {translated.content1}
          </Collapse.Item>
          <Collapse.Item title={translated.title2} name="2">
            {translated.content2}
          </Collapse.Item>
          <Collapse.Item title={translated.title3} name="3" disabled>
            {translated.content3}
          </Collapse.Item>
        </Collapse>
        <h2>{translated.header2}</h2>
        <Collapse
          activeKey={['1', '2']}
          onChange={(isOpen, name) => changeEnv(isOpen, name)}
        >
          <Collapse.Item title={translated.title1} name="1">
            {translated.content1}
          </Collapse.Item>
          <Collapse.Item title={translated.title2} name="2">
            {translated.content2}
          </Collapse.Item>
          <Collapse.Item title={translated.title3} name="3">
            {translated.content3}
          </Collapse.Item>
        </Collapse>
        <h2>{translated.header3}</h2>
        <Collapse activeKey={['1']} accordion expandIcon={<DownArrow />}>
          <Collapse.Item
            title={translated.title1}
            name="1"
            extra={translated.extra}
          >
            {translated.content1}
          </Collapse.Item>
          <Collapse.Item title={translated.title2} name="2">
            {translated.content2}
          </Collapse.Item>
          <Collapse.Item title={translated.title3} name="3">
            {translated.content3}
          </Collapse.Item>
        </Collapse>
        <h2>{translated.header4}</h2>
        <Collapse
          activeKey={['1']}
          accordion
          expandIcon={<DownArrow />}
          rotate={90}
        >
          <Collapse.Item
            title={translated.title1}
            name="1"
            expandIcon={<Checked />}
          >
            {translated.content1}
          </Collapse.Item>
          <Collapse.Item
            title={translated.title2}
            name="2"
            expandIcon={<HeartFill />}
          >
            {translated.content2}
          </Collapse.Item>
          <Collapse.Item title={translated.title3} name="3">
            {translated.content3}
          </Collapse.Item>
        </Collapse>
        <h2>{translated.header5}</h2>
        <Collapse activeKey={['1']} accordion expandIcon={<Star />}>
          <Collapse.Item
            title={
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Checked />
                {translated.title1}
              </div>
            }
            name="1"
          >
            {translated.content1}
          </Collapse.Item>
          <Collapse.Item
            title={translated.title2}
            extra={
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {translated.title2}
                <HeartFill color="red" />
              </div>
            }
            name="2"
          >
            {translated.content2}
          </Collapse.Item>
          <Collapse.Item title={translated.title3} name="3">
            {translated.content3}
          </Collapse.Item>
        </Collapse>

        <h2>{translated.header6}</h2>
        <Collapse activeKey={currIndex} accordion>
          {domData.map((item: itemObj, index: number) => {
            return (
              <Collapse.Item title={item.title} name={item.name} key={index}>
                {item.data}
              </Collapse.Item>
            )
          })}
        </Collapse>
        {/* eslint-disable-next-line react/button-has-type */}
        <Button
          style={{
            marginBottom: '20px',
            marginTop: '20px',
            marginRight: '10px',
          }}
          type="primary"
          size="small"
          onClick={() => changeNewData()}
        >
          {translated.buttonTextOne}
        </Button>
        <Button
          style={{ marginBottom: '20px', marginTop: '20px' }}
          type="info"
          size="small"
          onClick={() => changeOldData()}
        >
          {translated.buttonTextSec}
        </Button>
      </div>
    </>
  )
}

export default CollapseDemo
