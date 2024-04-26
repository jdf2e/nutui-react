import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'

const ShortPasswordDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      displayPlain: '展示明文',
      displayButton: '显示按钮组',
      customLength: '自定义密码长度: 4',
      forgetPassword: '忘记密码提示语事件回调',
      autoFocus: '自动聚焦',
    },
    'zh-TW': {
      basic: '基礎用法',
      displayPlain: '展示明文',
      displayButton: '顯示按鈕組',
      customLength: '自定義密碼長度: 4',
      forgetPassword: '忘記密碼提示語事件回調',
      autoFocus: '自動聚焦',
    },
    'en-US': {
      basic: 'Basic Usage',
      displayPlain: 'Display Plaintext',
      displayButton: 'Display Button',
      customLength: 'Custome Code Length: 4',
      forgetPassword: 'Forget Password Tips',
      autoFocus: 'AutoFocus',
    },
  })
  return (
    <div className="demo">
      <h2>{translated.basic}</h2>
      <Demo1 />
      <h2>{translated.displayPlain}</h2>
      <Demo2 />
      <h2>{translated.displayButton}</h2>
      <Demo3 />
      <h2>{translated.customLength}</h2>
      <Demo4 />
      <h2>{translated.forgetPassword}</h2>
      <Demo5 />
      <h2>{translated.autoFocus}</h2>
      <Demo6 />
    </div>
  )
}

export default ShortPasswordDemo
