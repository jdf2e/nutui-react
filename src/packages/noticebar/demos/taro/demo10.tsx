import React, { useState } from 'react'
import { Button, NoticeBar, Space } from '@nutui/nutui-react-taro'

const Demo10 = () => {
  const horseLamp3 = [
    'NoticeBar 公告栏',
    'Cascader 级联选择',
    'DatePicker 日期选择器',
    'CheckBox 复选按钮',
  ]

  const [list, setList] = useState(horseLamp3)

  return (
    <>
      <NoticeBar
        direction="vertical"
        height={50}
        speed={10}
        duration={1000}
        closeable
        onClose={() => {
          console.log('close')
        }}
      >
        {list.map((item, index) => {
          return (
            <div
              className="custom-item"
              style={{ height: '50px', lineHeight: '50px' }}
              key={index}
              onClick={() => {
                console.log('custom-inner', item)
              }}
            >
              {item}
            </div>
          )
        })}
      </NoticeBar>

      <Space style={{ marginTop: '10px' }}>
        <Button
          size="small"
          onClick={() => {
            setList((prev) => [...prev, `${prev.length + 1}`])
          }}
        >
          添加最后一项
        </Button>

        <Button
          size="small"
          onClick={() => {
            setList((prev) => prev.slice(0, -1))
          }}
        >
          删除最后一项
        </Button>
      </Space>
    </>
  )
}
export default Demo10
