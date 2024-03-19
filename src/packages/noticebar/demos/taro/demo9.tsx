import React from 'react'
import { NoticeBar } from '@nutui/nutui-react-taro'

const Demo9 = () => {
  const horseLamp2 = [
    'NoticeBar 公告栏',
    'Cascader 级联选择',
    'DatePicker 日期选择器',
    'CheckBox 复选按钮',
  ]
  return (
    <>
      <NoticeBar
        direction="vertical"
        list={horseLamp2}
        speed={10}
        duration={2000}
        leftIcon={
          <img
            alt="notice"
            width="16px"
            height="16px"
            src="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"
          />
        }
        onClick={(e) => {
          console.log('listClick', e.target)
        }}
        onItemClick={(e, val) => {
          console.log('dom', e.target)
          console.log('value', val)
        }}
      />
    </>
  )
}
export default Demo9
