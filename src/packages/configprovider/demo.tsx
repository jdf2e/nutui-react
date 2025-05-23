import React from 'react'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import { useTranslate } from '@/sites/assets/locale'

const ConfigProviderDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      text: 'Textarea 中文与英文',
      theme: '默认主题与定制主题',
    },
    'zh-TW': {
      text: 'Textarea 中文与英文',
      theme: '默認主題与定制主題',
    },
    'en-US': {
      text: 'Textarea zh-CN and en-US',
      theme: 'Default Theme And Custom Theme',
    },
  })
  return (
    <>
      <div className="demo">
        <h2>{translated.theme}</h2>
        <Demo1 />
        <h2>{translated.text}</h2>
        <Demo2 />
        <h2>RTL</h2>
        <Demo3 />
      </div>
    </>
  )
}

export default ConfigProviderDemo
