import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '@/sites/assets/styles/reset.scss'

import('../../packages/nutui.react')
ReactDOM.render(<App />, document.querySelector('#app'))
