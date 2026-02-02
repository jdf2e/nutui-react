import React, { useState } from 'react'
import TableVirtual, { TableColumnProps } from '../../index.virtual'

// 定义数据项接口
interface DataItem {
  name: string
  record: string
  age: number
  description?: string // 添加描述字段，用于测试不同高度的行
}

const DemoNoVirtual = () => {
  // 生成大量数据
  const generateData = (count: number): DataItem[] => {
    const data: DataItem[] = []
    for (let i = 0; i < count; i++) {
      // 为部分行添加不同长度的描述，以测试动态高度
      let description
      if (i % 3 === 0) {
        description = `这是一段较长的描述文本，用于测试动态高度。行号: ${i}. 这段文字会导致行高增加。`
      } else if (i % 5 === 0) {
        description = `这是一段非常非常长的描述文本，它会占用多行空间。这是为了测试虚拟滚动表格在处理不同高度的行时的表现。行号: ${i}. 我们希望表格能够正确计算每行的实际高度，并且在滚动时保持良好的性能和用户体验。`
      } else {
        description = undefined
      }

      data.push({
        name: `Name ${i}`,
        record: ['小学', '初中', '高中', '大专', '本科'][i % 5],
        age: Math.floor(Math.random() * 50) + 10,
        description,
      })
    }
    return data
  }

  // 定义列配置
  const [columns] = useState<TableColumnProps[]>([
    {
      title: 'ID',
      key: 'id',
      width: 50,
      fixed: 'left',
      render: (_record: any, index: number) => {
        return index + 1
      },
    },
    {
      title: '姓名',
      key: 'name',
      width: 80,
    },
    {
      title: '学历',
      key: 'record',
      width: 60,
    },
    {
      title: '年龄',
      key: 'age',
      width: 70,
      sorter: (a: DataItem, b: DataItem) => a.age - b.age,
    },
    {
      title: '描述',
      key: 'description',
      width: 100,
      fixed: 'right',
      render: (record: DataItem) => {
        return record.description ? (
          <div
            style={{
              padding: '5px 0',
              lineHeight: '1.5',
              whiteSpace: 'normal',
              wordBreak: 'break-word',
            }}
          >
            {record.description}
          </div>
        ) : (
          '-'
        )
      },
    },
  ])

  // 使用状态管理数据
  const [data] = useState(generateData(10))

  return <TableVirtual columns={columns} data={data} height={400} bordered />
}

export default DemoNoVirtual
