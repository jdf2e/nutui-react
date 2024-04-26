import React from 'react'
import './demo.scss'
import { useTranslate } from '../../sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'

const SignatureDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      title: '修改颜色和签字粗细',
    },
    'zh-TW': {
      basic: '基础用法',
      title: '修改顏色和簽字粗細',
    },
    'en-US': {
      basic: 'Basic Usage',
      title: 'Modify color and signature thickness',
    },
  })

  return (
    <>
      <div className="demo demo-signature">
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2> {translated.title}</h2>
        <Demo2 />
      </div>
    </>
  )
}

export default SignatureDemo
