import React from 'react'
import * as ReactDOM from 'react-dom/client'
import '@/sites/assets/styles/reset.scss'
import '@/sites/assets/styles/md-style.scss'
import App from './AppTheme'

const rootElement = document.querySelector('#doc')

if (rootElement != null) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
}
