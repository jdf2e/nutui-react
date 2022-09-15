import React, { useState } from 'react'
import { Collapse } from './collapse'
import CollapseItem from '../collapseitem'
import { Button } from '../button/button'
import { useTranslate } from '../../sites/assets/locale'

interface T {
  [key: string]: string | any
}
interface itemObj {
  title: string
  name: string
  data: string
}
const CollapseDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      header1: '基础用法',
      header2: '无icon样式，绑定点击事件',
      header3: '手风琴模式',
      header4: '自定义折叠图标',
      header5: '自定义title图标',
      header6: '动态改变数据',
      title1: '标题1',
      title2: '标题2',
      title3: '标题3',
      content1: 'NutUI-React是一套拥有京东风格的轻量级的 React 组件库',
      content2: '在产品的功能、体验、易用性和灵活性等各个方面做了全面的升级！',
      content3: '全面使用 TypeScipt',
      subTitle: '文本内容',
      buttonTextOnoe: '改变数据',
      buttonTextSec: '还原数据',
      oldDate: [
        {
          title: '标题1',
          name: '1',
          data: 'NutUI-React是一套拥有京东风格的轻量级的 React 组件库',
        },
        {
          title: '标题12',
          name: '2',
          data: 'NutUI-React是一套拥有京东风格的轻量级的 React 组件库',
        },
        {
          title: '标题13',
          name: '3',
          data: 'NutUI-React是一套拥有京东风格的轻量级的 React 组件库',
        },
      ],
      newDate: [
        {
          title: '标题21',
          name: '1',
          data: '在产品的功能、体验、易用性和灵活性等各个方面做了全面的升级！',
        },
        {
          title: '标题22',
          name: '2',
          data: '在产品的功能、体验、易用性和灵活性等各个方面做了全面的升级！',
        },
        {
          title: '标题23',
          name: '3',
          data: '在产品的功能、体验、易用性和灵活性等各个方面做了全面的升级！',
        },
      ],
    },
    'zh-TW': {
      header1: '基礎用法',
      header2: '無icon樣式，綁定點擊事件',
      header3: '手風琴模式',
      header4: '自定義折疊圖標',
      header5: '自定義title圖標',
      header6: '動態改變數據',
      title1: '標題1',
      title2: '標題2',
      title3: '標題3',
      content1: 'Nutui-React 是一套擁有京東風格的輕量級的 React 組件庫',
      content2: '在產品的功能、體驗、易用性和靈活性等各個方面做了全面的升級',
      content3: '全面使用 TypeScipt',
      subTitle: '文本內容',
      buttonTextOnoe: '改變數據',
      buttonTextSec: '還原數據',
      oldDate: [
        {
          title: '標題1',
          name: '1',
          data: 'Nutui-React 是一套擁有京東風格的輕量級的 React 組件庫',
        },
        {
          title: '標題2',
          name: '2',
          data: 'Nutui-React 是一套擁有京東風格的輕量級的 React 組件庫',
        },
        {
          title: '標題3',
          name: '3',
          data: 'Nutui-React 是一套擁有京東風格的輕量級的 React 組件庫',
        },
      ],
      newDate: [
        {
          title: '標題21',
          name: '1',
          data: '在產品的功能、體驗、易用性和靈活性等各個方面做了全面的升級！',
        },
        {
          title: '標題22',
          name: '2',
          data: '在產品的功能、體驗、易用性和靈活性等各個方面做了全面的升級！',
        },
        {
          title: '標題23',
          name: '3',
          data: '在產品的功能、體驗、易用性和靈活性等各個方面做了全面的升級！',
        },
      ],
    },
    'en-US': {
      header1: 'Basic Usage',
      header2: 'No icon style',
      header3: 'accordion Mode',
      header4: 'Custom collapse Icon',
      header5: 'Custom title Icon',
      header6: 'Change Data',
      title1: 'title1',
      title2: 'title2',
      title3: 'title3',
      content1:
        'Nutui-React is a lightweight React component library with JD style',
      content2:
        'The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!',
      content3: 'Full use of typescipt',
      subTitle: 'text content',
      buttonTextOne: 'change data',
      buttonTextSec: 'return data',
      oldDate: [
        {
          title: 'title1',
          name: '1',
          data: 'Nutui-React is a lightweight React component library with JD style',
        },
        {
          title: 'title2',
          name: '2',
          data: 'Nutui-React is a lightweight React component library with JD style',
        },
        {
          title: 'title3',
          name: '3',
          data: 'Nutui-React is a lightweight React component library with JD style',
        },
      ],
      newDate: [
        {
          title: 'title21',
          name: '1',
          data: 'The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!',
        },
        {
          title: 'title22',
          name: '2',
          data: 'The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!',
        },
        {
          title: 'title23',
          name: '3',
          data: 'The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!',
        },
      ],
    },
  })
  const [currIndex, setCurrIndex] = useState(2)
  const [domData, setDomData] = useState(translated.oldDate)
  const changeEnv = (isOpen: boolean, name: string) => {
    console.log(isOpen, name)
  }
  const changeNewData = () => {
    setDomData(translated.newDate)
    setCurrIndex(3)
  }
  const changeOldData = () => {
    setDomData(translated.oldDate)
    setCurrIndex(2)
  }
  return (
    <>
      <div className="demo">
        <h2>{translated.header1}</h2>
        <Collapse
          activeName={['1', '2']}
          icon="arrow-down"
          iconSize="16"
          iconColor="#999"
        >
          <CollapseItem title={translated.title1} name="1">
            {translated.content1}
          </CollapseItem>
          <CollapseItem title={translated.title2} name="2">
            {translated.content2}
          </CollapseItem>
          <CollapseItem title={translated.title3} name="3" disabled>
            {translated.content3}
          </CollapseItem>
        </Collapse>
        <h2>{translated.header2}</h2>
        <Collapse
          activeName={['1', '2']}
          change={(isOpen, name) => changeEnv(isOpen, name)}
        >
          <CollapseItem title={translated.title1} name="1">
            {translated.content1}
          </CollapseItem>
          <CollapseItem title={translated.title2} name="2">
            {translated.content2}
          </CollapseItem>
          <CollapseItem title={translated.title3} name="3">
            {translated.content3}
          </CollapseItem>
        </Collapse>
        <h2>{translated.header3}</h2>
        <Collapse activeName={['1']} accordion icon="arrow-down">
          <CollapseItem
            title={translated.title1}
            name="1"
            subTitle={translated.subTitle}
          >
            {translated.content1}
          </CollapseItem>
          <CollapseItem title={translated.title2} name="2">
            {translated.content2}
          </CollapseItem>
          <CollapseItem title={translated.title3} name="3">
            {translated.content3}
          </CollapseItem>
        </Collapse>
        <h2>{translated.header4}</h2>
        <Collapse activeName={['1']} accordion icon="arrow-right2" rotate={90}>
          <CollapseItem title={translated.title1} name="1" icon="arrow-down">
            {translated.content1}
          </CollapseItem>
          <CollapseItem title={translated.title2} name="2" icon="arrow-down">
            {translated.content2}
          </CollapseItem>
          <CollapseItem title={translated.title3} name="3" icon="arrow-down">
            {translated.content3}
          </CollapseItem>
        </Collapse>
        <h2>{translated.header5}</h2>
        <Collapse activeName={['1']} accordion icon="arrow-down">
          <CollapseItem
            title={translated.title1}
            name="1"
            titleIcon="checked"
            titleIconSize="16"
            titleIconColor="red"
            titleIconPosition="left"
          >
            {translated.content1}
          </CollapseItem>
          <CollapseItem
            title={translated.title2}
            name="2"
            titleIcon="heart-fill"
            titleIconColor="red"
            titleIconPosition="right"
          >
            {translated.content2}
          </CollapseItem>
          <CollapseItem title={translated.title3} name="3" icon="arrow-down">
            {translated.content3}
          </CollapseItem>
        </Collapse>

        <h2>{translated.header6}</h2>
        <Collapse activeName={currIndex} accordion>
          {domData.map((item: itemObj, index: number) => {
            return (
              <CollapseItem title={item.title} name={item.name} key={index}>
                {item.data}
              </CollapseItem>
            )
          })}
        </Collapse>
        {/* eslint-disable-next-line react/button-has-type */}
        <Button type="primary" size="small" onClick={() => changeNewData()}>
          {translated.buttonTextOne}
        </Button>
        <Button type="info" size="small" onClick={() => changeOldData()}>
          {translated.buttonTextSec}
        </Button>
      </div>
    </>
  )
}

export default CollapseDemo
