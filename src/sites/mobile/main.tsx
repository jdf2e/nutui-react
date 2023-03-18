import React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import '@/utils/touchEmulator'
import '@/sites/assets/styles/reset.scss'
import '@/styles/font/iconfont.css'

import('../../packages/nutui.react.scss')

const rootElement = document.querySelector('#app')

if (rootElement != null) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
}
