import React, { useState } from 'react'
import { Table, TableColumnProps } from '@nutui/nutui-react'

const Demo14 = () => {
  const [columns] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
    },
    {
      title: '性别',
      key: 'gender',
    },
    {
      title: '学历',
      key: 'record',
    },
  ])

  const [data] = useState([
    {
      name: 'Tom',
      gender: '男',
      record: '小学',
    },
    {
      height: '50px',
      text: '这里是自定义行',
      Component: (props: any) => {
        return (
          <div className="nut-table-main-body-tr">
            <div style={{ height: props.height }}>
              <div
                style={{
                  position: 'absolute',
                  height: props.height,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottom:
                    '1px solid var(--nutui-table-border-color, var(--nutui-black-3, rgba(0, 0, 0, 0.06)))',
                }}
              >
                {props.text}
              </div>
            </div>
          </div>
        )
      },
      rowRender: (item: any) => {
        const { Component, ...rest } = item
        return <Component {...rest} />
      },
    },
    {
      name: 'Lucy',
      gender: '女',
      record: '本科',
    },
    {
      name: 'Jack',
      gender: '男',
      record: '高中',
    },
  ])

  return <Table columns={columns} data={data} />
}
export default Demo14
