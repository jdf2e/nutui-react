import React from 'react'
import * as ReactDOM from 'react-dom/client'
import '@/sites/assets/styles/reset.scss'
import '@/styles/theme-default.scss'
import '@/sites/assets/styles/md-style.scss'
import App from './App'

const rootElement = document.querySelector('#doc')

if (rootElement != null) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
}
