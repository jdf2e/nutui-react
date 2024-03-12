import React from 'react'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import { useTranslate } from '@/sites/assets/locale'

const ConfigProviderDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title1: 'Textarea 默认',
      title2: 'Textarea 英文',
      defaultTheme: '默认主题',
      customTheme: '定制主题',
    },
    'zh-TW': {
      title1: '默認用法',
      title2: 'Textarea 英文',
      defaultTheme: '默認主題',
      customTheme: '定制主題',
    },
    'en-US': {
      title1: 'Textarea default',
      title2: 'Textarea en-US',
      customTheme: 'Custom Theme',
      defaultTheme: 'Default Theme',
    },
  })
  return (
    <>
      <div className="demo">
        <h2>{translated.defaultTheme}</h2>
        <Demo1 />
        <h2>{translated.customTheme}</h2>
        <Demo2 />
        <h2>{translated.title1}</h2>
        <Demo3 />
        <h2>{translated.title2}</h2>
        <Demo4 />
        <h2>RTL</h2>
        <Demo5 />
      </div>
    </>
  )
}

export default ConfigProviderDemo
