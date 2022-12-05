import React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import '@/styles/theme-default.scss'
import '@/sites/assets/styles/reset.scss'

import('../../packages/nutui.react.scss')

const rootElement = document.querySelector('#app')

if (rootElement != null) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
}
