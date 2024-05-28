import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'

const ResultPageDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      modifyStatus: '修改状态',
      noTitle: '无标题',
      singleButton: '单按钮',
      noButton: '无按钮',
    },
    'zh-TW': {
      basic: '基礎用法',
      modifyStatus: '修改狀態',
      noTitle: '無標題',
      singleButton: '單按鈕',
      noButton: '無按鈕',
    },
    'en-US': {
      basic: 'Basic Usage',
      modifyStatus: 'Modify Status',
      noTitle: 'No Title',
      singleButton: 'Single Button',
      noButton: 'No Button',
    },
  })
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.modifyStatus}</h2>
        <Demo2 />
        <h2>{translated.noTitle}</h2>
        <Demo3 />
        <h2>{translated.singleButton}</h2>
        <Demo4 />
        <h2>{translated.noButton}</h2>
        <Demo5 />
      </div>
    </>
  )
}

export default ResultPageDemo
