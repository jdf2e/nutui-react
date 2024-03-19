import React from 'react'
import { NoticeBar } from '@nutui/nutui-react'
import { Fabulous } from '@nutui/icons-react'

const Demo10 = () => {
  const horseLamp1 = [
    'NoticeBar 公告栏',
    'Cascader 级联选择',
    'DatePicker 日期选择器',
    'CheckBox 复选按钮',
  ]
  return (
    <>
      <NoticeBar
        className="custom"
        direction="vertical"
        list={horseLamp1}
        speed={10}
        duration={1000}
        onItemClick={(e, v) => {
          console.log('onclick-custom', v)
        }}
        rightIcon={<Fabulous width={16} height={16} color="#f0250f" />}
      />
    </>
  )
}
export default Demo10
