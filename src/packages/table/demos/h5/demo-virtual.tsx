import React, { useState, useRef } from 'react'
import TableVirtual, {
  TableColumnProps,
  VirtualTableRef,
} from '../../index.virtual'

// 定义数据项接口
interface DataItem {
  name: string
  record: string
  age: number
  description?: string // 添加描述字段，用于测试不同高度的行
}

const DemoVirtual = () => {
  // 创建表格引用
  const tableRef = useRef<VirtualTableRef>(null)

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
  const [data, setData] = useState(generateData(1000))

  // 更新数据的方法
  const updateData = (count: number) => {
    setData(generateData(count))
  }

  // 滚动到指定行的方法
  const handleScrollToRow = (index: number) => {
    if (tableRef.current) {
      tableRef.current.scrollToIndex(index)
    }
  }

  return (
    <div>
      <h2>普通表格 (无虚拟滚动)</h2>
      <TableVirtual
        columns={columns}
        data={data.slice(0, 10)}
        style={{ marginBottom: '20px' }}
        height={400}
        bordered
      />

      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleScrollToRow(0)}>滚动到顶部</button>
        <button
          onClick={() => handleScrollToRow(500)}
          style={{ marginLeft: '10px' }}
        >
          滚动到中间
        </button>
        <button
          onClick={() => handleScrollToRow(999)}
          style={{ marginLeft: '10px' }}
        >
          滚动到底部
        </button>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => updateData(500)}>更新为500条数据</button>
        <button onClick={() => updateData(1500)} style={{ marginLeft: '10px' }}>
          更新为1500条数据
        </button>
        <button onClick={() => updateData(1000)} style={{ marginLeft: '10px' }}>
          重置为1000条数据
        </button>
      </div>

      {/* <h2>虚拟滚动表格 (固定高度)</h2>
      <TableVirtual
        ref={tableRef}
        columns={columns}
        data={data}
        virtual
        height={400}
        rowHeight={40}
        overscan={10}
        bordered
      /> */}

      <h2>虚拟滚动表格 (动态高度)</h2>
      <TableVirtual
        columns={columns}
        data={data}
        virtual
        height={400}
        rowHeight={40} // 默认行高，实际会根据内容动态调整
        overscan={10}
        bordered
        dynamicHeight // 启用动态高度
      />
    </div>
  )
}

export default DemoVirtual
