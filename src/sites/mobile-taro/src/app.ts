import { Component } from 'react'
import '@/sites/assets/styles/reset.scss'
import NutUI from '@/packages/nutui.react.taro.scss'
import './app.scss'
import Taro from '@tarojs/taro'

Taro.getEnv() === 'WEB' ? import('@/sites/assets/util/touch-emulator.js') : null

console.log(NutUI)
class App extends Component {
  render() {
    return this.props.children
  }
}
export default App
