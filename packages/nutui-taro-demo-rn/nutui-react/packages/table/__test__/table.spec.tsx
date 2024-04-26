import * as React from 'react'
import { useState } from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Star } from '@nutui/icons-react'
import { Table } from '../table'
import Button from '../../button'
import { TableColumnProps } from '../types'

const columns = [
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
]

const data = [
  {
    sex: '男',
    name: 'Tom',
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
]

const columns2 = [
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
]

const data2 = [
  {
    name: 'Tom',
    sex: '男',
    record: '小学',
    render: () => {
      return (
        <Button onClick={() => {}} size="small" type="primary">
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
      return <Star height="14px" width="14px" />
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
]

const columns3: TableColumnProps[] = [
  {
    title: '姓名',
    key: 'name',
    align: 'center',
    fixed: 'left',
    width: 100,
  },
  {
    title: '性别',
    key: 'sex',
    width: 60,
  },
  {
    title: '学历',
    key: 'record',
  },
  {
    title: '生日',
    key: 'birthday',
  },
  {
    title: '年龄',
    key: 'age',
    fixed: 'right',
    width: 100,
  },
]

const data3 = [
  {
    name: 'Tom',
    sex: '男',
    record: '小学',
    birthday: '2010-01-01',
    age: 10,
  },
  {
    name: 'Lucy',
    sex: '女',
    record: '本科',
    birthday: '2000-01-01',
    age: 30,
  },
  {
    name: 'Jack',
    sex: '男',
    record: '高中',
    birthday: '2020-01-01',
    age: 4,
  },
  {
    name: 'Sara',
    sex: '女',
    record: '高中',
    birthday: '2020-01-01',
    age: 6,
  },
  {
    name: 'Frank',
    sex: '男',
    record: '幼儿园',
    birthday: '2020-01-01',
    age: 3,
  },
]

test('render bordered props', () => {
  const { container } = render(<Table columns={columns} data={data} />)
  const headBorder = container.querySelector('.nut-table-main-head-tr-border')
  expect(headBorder).toBeInTheDocument()
})

test('render align props', () => {
  const { container } = render(<Table columns={columns} data={data} />)
  const headTh = container.querySelectorAll('.nut-table-main-head-tr-th')
  const bodyTd = container.querySelectorAll('.nut-table-main-body-tr-td')

  expect(headTh[0]).toHaveClass('nut-table-main-head-tr-aligncenter')
  expect(bodyTd[0]).toHaveClass('nut-table-main-head-tr-aligncenter')
  expect(bodyTd[3]).toHaveClass('nut-table-main-head-tr-aligncenter')
  expect(bodyTd[6]).toHaveClass('nut-table-main-head-tr-aligncenter')
})

test('show summary', () => {
  const { container } = render(
    <Table columns={columns} data={data} summary="这是总结栏" />
  )
  const tableSummary = container.querySelector('.nut-table-summary')
  expect(tableSummary).toBeInTheDocument()
})

test('render striped props', () => {
  const { container } = render(<Table columns={columns} data={data} striped />)
  const tableMain = container.querySelector('.nut-table-main')
  expect(tableMain).toHaveClass('nut-table-main-striped')
})

test('render no data', () => {
  const { container } = render(<Table columns={columns} data={[]} />)
  const tableNoData = container.querySelector('.nut-table-summary')
  expect(tableNoData).toBeInTheDocument()
})

test('render no data of user defined', () => {
  const { container } = render(
    <Table
      columns={columns}
      data={[]}
      noData={<div className="no-data">这里是自定义展示</div>}
    />
  )

  const tableNoData = container.querySelector('.no-data')
  expect(tableNoData).toHaveTextContent('这里是自定义展示')
})

test('user defined td content', () => {
  const { container } = render(<Table columns={columns2} data={data2} />)
  const bodyTd = container.querySelectorAll('.nut-table-main-body-tr-td')
  const bodyTdButton = bodyTd[3].querySelector('.nut-button')
  expect(bodyTdButton).toBeInTheDocument()
})

test('render async', async () => {
  const TableDemo = () => {
    const [demoData, setDemoData] = useState<Array<any>>([])

    return (
      <>
        <Button data-testid="test" onClick={() => setDemoData(data2)}>
          change
        </Button>
        <Table columns={columns} data={demoData} />
      </>
    )
  }

  const { container, getByTestId } = render(<TableDemo />)
  expect(container.querySelectorAll('.nut-table-main-body-tr').length).toBe(0)
  fireEvent.click(getByTestId('test'))
  expect(container.querySelectorAll('.nut-table-main-body-tr').length).toBe(3)
})

test('sorter', async () => {
  const fn = vi.fn()
  const TableDemo = () => {
    return (
      <>
        <Table
          onSort={fn}
          columns={[
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
          ]}
          data={[
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
          ]}
        />
      </>
    )
  }

  const { container, getByTestId } = render(<TableDemo />)
  const th = container.querySelectorAll(
    '.nut-table-main-head-tr .nut-table-main-head-tr-th'
  )[3]
  fireEvent.click(th)
  await waitFor(() => expect(fn.mock.calls[0][1][0].age).toEqual(4))
  fireEvent.click(th)
  const td = container.querySelectorAll('.nut-table-main-body-tr-td')[3]
  expect(td).toHaveTextContent('10')
})

test('table head and column fixed', () => {
  const { container } = render(<Table columns={columns3} data={data3} />)
  const stickyLeft = container.querySelector('.nut-table-sticky-left')
  const stickyRight = container.querySelector('.nut-table-sticky-right')
  expect(stickyLeft).toBeInTheDocument()
  expect(stickyRight).toBeInTheDocument()
})
