import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'

const ResultPageDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      modifyStatus: '修改状态',
      noTitle: '无标题',
      singleButton: '单按钮',
      noButton: '无按钮',
      popup: '半弹层内嵌',
      dialog: '弹窗内嵌',
    },
    'zh-TW': {
      basic: '基礎用法',
      modifyStatus: '修改狀態',
      noTitle: '無標題',
      singleButton: '單按鈕',
      noButton: '無按鈕',
      popup: '半彈層內嵌',
      dialog: '彈窗內嵌',
    },
    'en-US': {
      basic: 'Basic Usage',
      modifyStatus: 'Modify Status',
      noTitle: 'No Title',
      singleButton: 'Single Button',
      noButton: 'No Button',
      popup: 'Inside Popup',
      dialog: 'Inside Dialog',
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
        <h2>{translated.popup}</h2>
        <Demo6 />
        <h2>{translated.dialog}</h2>
        <Demo7 />
      </div>
    </>
  )
}

export default ResultPageDemo
