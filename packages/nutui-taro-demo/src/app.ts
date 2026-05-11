import { Component } from 'react'
import { initScaleF } from '@/utils/scale-f'
import('@/sites/assets/styles/reset.scss')
import('@/packages/nutui.react.scss.taro')
import('@nutui/touch-emulator')

import './app.scss'

// console.log(NutUI)
class App extends Component {
  private disposeScale?: () => void

  componentDidMount() {
    // 写入 :root 的 --nut-scale-f / --nut-scale-font / --nut-scale-icon，与组件内 scale-* 一致
    this.disposeScale = initScaleF('elderly')
  }

  componentWillUnmount() {
    this.disposeScale?.()
  }

  render() {
    return this.props.children
  }
}
export default App
