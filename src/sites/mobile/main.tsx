import React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import '@/sites/assets/util/touch-emulator' // 适配 h5 示例桌面端预览
import '@/sites/assets/styles/reset.scss'
import { isMobile } from '@/sites/assets/util'

const projectID = import.meta.env.VITE_APP_PROJECT_ID
if (projectID) {
  import(`../../styles/font-${projectID}/iconfont.css`)
  import(`../../styles/theme-${projectID}.scss`)
} else {
  import(`../../styles/theme-default.scss`)
}

import('../../packages/nutui.react.scss')

const rootElement = document.querySelector('#app')

let pathname = ''
try {
  pathname = window.parent.location.pathname
} catch (e) {}
let href = ''

if (!isMobile && pathname.includes('demo')) {
  href = location.href.replace('demo.html', '')
  window.location.href = href
}

if (rootElement != null) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
}
