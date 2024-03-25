import React from 'react'
import { NoticeBar } from '@nutui/nutui-react'

const Demo9 = () => {
  const horseLamp3 = [
    'NoticeBar 公告栏',
    'Cascader 级联选择',
    'DatePicker 日期选择器',
    'CheckBox 复选按钮',
  ]

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
        {horseLamp3.map((item, index) => {
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
    </>
  )
}
export default Demo9
