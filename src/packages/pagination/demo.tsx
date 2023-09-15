import React, { useState } from 'react'
import { Left, Right } from '@nutui/icons-react'
import Pagination from '@/packages/pagination'
import Cell from '@/packages/cell'
import { useTranslate } from '../../sites/assets/locale'

interface T {
  basic: string
  simple: string
  lite: string
  ellipse: string
  custom: string
  uncontrolled: string
}

const PaginationDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      simple: '简单模式',
      lite: '极简模式',
      ellipse: '显示省略号',
      custom: '自定义按钮',
      uncontrolled: '非受控方式',
    },
    'zh-TW': {
      basic: '基礎用法',
      simple: '簡單模式',
      lite: '极简模式',
      ellipse: '顯示省略號',
      custom: '自定義按鈕',
      uncontrolled: '非受控方式',
    },
    'en-US': {
      basic: 'Basic usage',
      simple: 'Simple mode',
      lite: 'lite Mode',
      ellipse: 'Show ellipsis',
      custom: 'Custom button',
      uncontrolled: 'Uncontrolled mode',
    },
  })
  const [currentPage1, setCurrent1] = useState(1)
  const [currentPage2, setCurrent2] = useState(1)
  const [currentPage3, setCurrent3] = useState(1)
  const [currentPage4, setCurrent4] = useState(3)
  const pageChange1 = (v: number) => {
    const c = v
    setCurrent1(c)
  }
  const pageChange2 = (v: number) => {
    const c = v
    setCurrent2(c)
  }
  const pageChange3 = (v: number) => {
    const c = v
    setCurrent3(c)
  }
  const pageChange4 = (v: number) => {
    const c = v
    setCurrent4(c)
  }
  const itemRender = (item: any) => {
    return <div>{item.number === 3 ? 'hot' : item.text}</div>
  }
  const pageChange5 = (v: number) => {
    const c = v
    setCurrent3(c)
  }
  return (
    <div className="demo">
      <h2>{translated.basic}</h2>
      <Cell>
        <Pagination
          value={currentPage1}
          total={20}
          pageSize={5}
          onChange={pageChange1}
        />
      </Cell>
      <h2>{translated.simple}</h2>
      <Cell>
        <Pagination
          value={currentPage2}
          total={12}
          pageSize={1}
          mode="simple"
          onChange={pageChange2}
        />
      </Cell>
      <h2>{translated.lite}</h2>
      <Cell>
        <Pagination
          value={currentPage2}
          total={12}
          pageSize={1}
          mode="lite"
          onChange={pageChange2}
        />
      </Cell>
      <h2>{translated.ellipse}</h2>
      <Cell>
        <Pagination
          value={currentPage3}
          total={125}
          itemSize={2}
          ellipse
          onChange={pageChange3}
        />
      </Cell>
      <h2>{translated.custom}</h2>
      <Cell>
        <Pagination
          value={currentPage4}
          total={500}
          itemSize={5}
          onChange={pageChange4}
          prev={<Left />}
          next={<Right />}
          itemRender={itemRender}
        />
      </Cell>
      <h2>{translated.uncontrolled}</h2>
      <Cell>
        <Pagination
          defaultValue={15}
          total={500}
          pageSize={10}
          itemSize={3}
          onChange={pageChange5}
        />
      </Cell>
    </div>
  )
}

export default PaginationDemo
