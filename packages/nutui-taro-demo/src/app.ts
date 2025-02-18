import { Component } from 'react'
import './app.scss'

import('@/sites/assets/styles/reset.scss')
import('@/packages/nutui.react.scss.taro')
import('@nutui/touch-emulator')

// console.log(NutUI)
class App extends Component {
  render() {
    return this.props.children
  }
}
export default App
