import React from 'react'
import { NoticeBar } from '@nutui/nutui-react'

const Demo7 = () => {
  const horseLamp1 = [
    'NoticeBar 公告栏',
    'Cascader 级联选择',
    'DatePicker 日期选择器',
    'CheckBox 复选按钮',
  ]
  const go = (item: any) => {
    console.log(item)
  }
  return (
    <div className="interstroll-list">
      <NoticeBar
        direction="vertical"
        list={horseLamp1}
        speed={10}
        duration={1000}
        height={30}
        onClick={(e) => {
          go(e.target.innerHtml)
        }}
        closeable
      />
    </div>
  )
}
export default Demo7
