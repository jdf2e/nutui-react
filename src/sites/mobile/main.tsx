import React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import '@nutui/touch-emulator' // 适配 h5 示例桌面端预览
import { isMobile } from '@/sites/assets/util'
import('../../packages/nutui.react.scss')

const projectID = import.meta.env.VITE_APP_PROJECT_ID || ''

if (projectID) {
  import(`@/styles/theme-${projectID}.scss`)
  import(`@/styles/font-${projectID}/iconfont.css`)
} else {
  import('@/styles/theme-default.scss')
}

const rootElement = document.querySelector('#app')

let pathname = ''
try {
  pathname = window.parent.location.pathname
} catch (e) {}
let href = ''

if (!isMobile && pathname.includes('demo') && !pathname.includes('jmapp')) {
  href = location.href.replace('demo.html', '')
  window.location.href = href
}

if (rootElement != null) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
}
