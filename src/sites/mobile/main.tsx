import React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import '@/utils/touchEmulator' // 适配 h5 示例桌面端预览
import '@/sites/assets/styles/reset.scss'
import '@/styles/font/iconfont.css'

import('../../packages/nutui.react.scss')

const rootElement = document.querySelector('#app')

if (rootElement != null) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
}
