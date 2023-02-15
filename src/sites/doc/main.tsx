import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { isMobile } from '@/sites/assets/util'
import '@/sites/assets/styles/reset.scss'
import '@/styles/theme-default.scss'
import '@/sites/assets/styles/md-style.scss'
import App from './App'

if (isMobile) {
  let url = location.hash
    .replace('/zh-CN/', '')
    .replace('/en-US/', '')
    .replace('component/', '')
  location.replace('demo.html' + url)
}

const rootElement = document.querySelector('#doc')

if (rootElement != null) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
}
