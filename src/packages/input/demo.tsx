import React from 'react'

import { useTranslate } from '../../sites/assets/locale'

import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'
import Demo8 from './demos/h5/demo8'
import Demo9 from './demos/h5/demo9'
import Demo10 from './demos/h5/demo10'
import Demo11 from './demos/h5/demo11'
import Demo12 from './demos/h5/demo12'
import Demo13 from './demos/h5/demo13'
import Demo14 from './demos/h5/demo14'

const InputDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      uncontrolled: '非受控',
      controlled: '受控',
      title1: '自定义类型',
      title2: '禁用和只读',
      title3: '显示清除图标',
      title6: '格式化输入内容',
      title8: '对齐方式',
      title10: '事件',
      title11: '布局',
      border: '边框',
      withForm: '配合表单使用',
      password1: '带密码可见',
      wordCount: '字数统计',
    },
    'en-US': {
      basic: 'Basic usage',
      uncontrolled: 'uncontrolled',
      controlled: 'Controlled',
      title1: 'Custom Type',
      title2: 'Disabled and read-only',
      title3: 'Show clear icon',
      withForm: 'With Form',
      wordCount: 'Word count',
      password1: 'Visible with password',
      title6: 'Format input content',
      title8: 'Alignment',
      title10: 'event',
      title11: 'Layout',
      border: 'border',
    },
  })

  return (
    <>
      <div className="demo" style={{ paddingBottom: '20px' }}>
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.uncontrolled}</h2>
        <Demo2 />
        <h2>{translated.controlled}</h2>
        <Demo3 />
        <h2>{translated.title1}</h2>
        <Demo4 />
        <h2>{translated.title2}</h2>
        <Demo5 />
        <h2>{translated.title3}</h2>
        <Demo6 />
        <h2>{translated.withForm}</h2>
        <Demo7 />
        <h2>{translated.wordCount}</h2>
        <Demo8 />
        <h2>{translated.password1}</h2>
        <Demo9 />
        <h2>{translated.title6}</h2>
        <Demo10 />
        <h2>{translated.title8}</h2>
        <Demo11 />
        <h2>{translated.title10}</h2>
        <Demo12 />
        <h2>{translated.title11}</h2>
        <Demo13 />
        <h2>{translated.border}</h2>
        <Demo14 />
      </div>
    </>
  )
}

export default InputDemo
