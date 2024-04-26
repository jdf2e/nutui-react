import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { isMobile } from '@/sites/assets/util'
import '@/sites/assets/styles/reset.scss'
import '@/sites/assets/styles/md-style.scss'
import App from './App'

if (isMobile) {
  location.replace('demo.html')
}

const rootElement = document.querySelector('#doc')

if (rootElement != null) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
}
