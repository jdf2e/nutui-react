import React, { useState, useEffect } from 'react'
import { DownArrow, Checked, HeartFill, Star } from '@nutui/icons-react'
import { Collapse } from './collapse'
import { Button } from '../button/button'
import { useTranslate } from '../../sites/assets/locale'

interface itemObj {
  title: string
  name: string
  data: string
}
interface T {
  header1: string
  controll: string
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
      controll: '受控方式',
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
      controll: '受控方式',
      header2: '無icon樣式，綁定點擊事件',
      header3: '手風琴模式',
      header4: '自定義折疊圖標',
      header5: '自定義 title 與 extra',
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
      controll: 'Controlled',
      header2: 'No icon style',
      header3: 'accordion Mode',
      header4: 'Custom collapse Icon',
      header5: 'Custom title and extra',
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
  ]
  const [domData, setDomData] = useState(oldDate)

  const [activeName, setActiveKey] = useState<Array<string> | string>([
    '1',
    '2',
  ])

  useEffect(() => {
    setDomData(oldDate)
  }, [translated])
  const changeNewData = () => {
    setDomData(newDate)
  }
  const changeOldData = () => {
    setDomData(oldDate)
  }

  return (
    <>
      <div className="demo">
        <h2>{translated.header1}</h2>
        <Collapse
          className="test"
          defaultActiveName={['1', '2']}
          expandIcon={<DownArrow />}
        >
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
        <h2>{translated.controll}</h2>
        <Collapse
          activeName={activeName}
          onChange={(activeName, name, isOpen) => setActiveKey(activeName)}
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
        <h2>{translated.header2}</h2>
        <Collapse defaultActiveName={['1', '2']}>
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
        <Collapse
          defaultActiveName={['1']}
          accordion
          expandIcon={<DownArrow />}
        >
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
          defaultActiveName={['1']}
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
        <Collapse defaultActiveName={['1']} accordion expandIcon={<Star />}>
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
        <Collapse defaultActiveName="2" accordion>
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
