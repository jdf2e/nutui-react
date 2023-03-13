import React, { useState } from 'react'
import Button from '@/packages/button'
import Toast from '@/packages/toast'
import Icon from '@/packages/icon'
import Table from '@/packages/table'
import { TableColumnProps } from './types'
import { useTranslate } from '../../sites/assets/locale'

interface T {
  basic: string
  borderedAndAlign: string
  summaryTitle: string
  summary: string
  striped: string
  noDataTitle: string
  customNoData: string
  customCell: string
  asynchronousRendering: string
  sorting: string
  hideHeader: string
}

const TableDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      borderedAndAlign: '是否显示边框，文字对齐',
      summaryTitle: '显示总结栏',
      summary: '这是总结栏',
      striped: '条纹、明暗交替',
      hideHeader: '隐藏表头',
      noDataTitle: '无数据默认展示，支持自定义',
      customNoData: '这里是自定义展示',
      customCell: '自定义单元格',
      asynchronousRendering: '支持异步渲染(5s之后看效果)',
      sorting: '支持排序',
    },
    'en-US': {
      basic: 'Basic usage',
      borderedAndAlign: 'Whether to display border and align text',
      summaryTitle: 'Show summary bar',
      summary: 'This is the summary column',
      striped: 'Stripes, alternating light and shade',
      hideHeader: 'Hide table header',
      noDataTitle:
        'No data is displayed by default, and customization is supported',
      customNoData: 'Here is the custom display',
      customCell: 'Custom cell',
      asynchronousRendering:
        'Support asynchronous rendering(See the effect after 5S)',
      sorting: 'Support sorting',
    },
  })

  const [columns1, setColumns1] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
    },
    {
      title: '性别',
      key: 'sex',
      render: (record: any) => {
        return (
          <span style={{ color: record.sex === '女' ? 'blue' : 'green' }}>
            {record.sex}
          </span>
        )
      },
    },
    {
      title: '学历',
      key: 'record',
    },
  ])
  const [columns2, setColumns2] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
    },
    {
      title: '性别',
      key: 'sex',
    },
    {
      title: '学历',
      key: 'record',
    },
  ])

  const [columns4, setColumns4] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
    },
    {
      title: '性别',
      key: 'sex',
    },
    {
      title: '学历',
      key: 'record',
    },
    {
      title: '操作',
      key: 'render',
    },
  ])

  const [columns5, setColumns5] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
      sorter: true,
    },
    {
      title: '性别',
      key: 'sex',
    },
    {
      title: '学历',
      key: 'record',
    },
    {
      title: '年龄',
      key: 'age',
      sorter: (row1: any, row2: any) => {
        return row1.age - row2.age
      },
    },
  ])

  const [data1, setData1] = useState([
    {
      name: 'Tom',
      sex: '男',
      record: '小学',
    },
    {
      name: 'Lucy',
      sex: '女',
      record: '本科',
    },
    {
      name: 'Jack',
      sex: '男',
      record: '高中',
    },
  ])

  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([] as any)
  const [data4, setData4] = useState([
    {
      name: 'Tom',
      sex: '男',
      record: '小学',
      render: () => {
        return (
          <Button
            onClick={() => Toast.text('hello')}
            size="small"
            type="primary"
          >
            <div>Hello</div>
          </Button>
        )
      },
    },
    {
      name: 'Lucy',
      sex: '女',
      record: '本科',
      render: () => {
        return <Icon name="dongdong" size="14px" />
      },
    },
    {
      name: 'Jack',
      sex: '男',
      record: '高中',
      render: () => {
        return (
          <Button
            type="success"
            size="small"
            onClick={() => window.open('https://www.jd.com')}
          >
            <div>跳转到京东</div>
          </Button>
        )
      },
    },
  ])

  const [data5, setData5] = useState([
    {
      name: 'Tom',
      sex: '男',
      record: '小学',
      age: 10,
    },
    {
      name: 'Lucy',
      sex: '女',
      record: '本科',
      age: 30,
    },
    {
      name: 'Jack',
      sex: '男',
      record: '高中',
      age: 4,
    },
  ])

  setTimeout(() => {
    setData3(data1)
  }, 5000)

  const handleSorter = (item: TableColumnProps, data: Array<any>) => {
    Toast.text(`${JSON.stringify(item)}`)
    setData5([...data])
  }

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Table columns={columns1} data={data1} style={{ background: '#fff' }} />
        <h2>{translated.borderedAndAlign}</h2>
        <Table
          columns={columns2}
          data={data1}
          bordered={false}
          style={{ background: '#fff' }}
        />
        <h2>{translated.summaryTitle}</h2>
        <Table
          columns={columns1}
          data={data1}
          summary={translated.summary}
          style={{ background: '#fff' }}
        />
        <h2>{translated.striped}</h2>
        <Table
          columns={columns1}
          data={data1}
          style={{ background: '#fff' }}
          striped
        />
        <h2>{translated.hideHeader}</h2>
        <Table
          columns={columns1}
          data={data1}
          style={{ background: '#fff' }}
          hideHeader
        />
        <h2>{translated.noDataTitle}</h2>
        <Table columns={columns1} data={data2} style={{ background: '#fff' }} />
        <Table
          columns={columns1}
          data={data2}
          style={{ background: '#fff' }}
          noData={translated.customNoData}
        />
        <h2>{translated.customCell}</h2>
        <Table columns={columns4} data={data4} style={{ background: '#fff' }} />
        <h2>{translated.asynchronousRendering}</h2>
        <Table columns={columns1} data={data3} style={{ background: '#fff' }} />
        <h2>{translated.sorting}</h2>
        <Table
          columns={columns5}
          data={data5}
          onSorter={handleSorter}
          style={{ background: '#fff' }}
        />
      </div>
    </>
  )
}

export default TableDemo
