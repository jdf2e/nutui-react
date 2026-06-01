import { Component } from 'react'
import { initScaleF } from '@/utils/scale-f'
import('@/sites/assets/styles/reset.scss')
import('@/packages/nutui.react.scss.taro')
import('@nutui/touch-emulator')

import './app.scss'

// H5 开发模式下自动启动 VConsole
if (process.env.TARO_ENV === 'h5' && process.env.NODE_ENV === 'development') {
  import('vconsole').then(({ default: VConsole }) => {
    new VConsole()
  })
}

// console.log(NutUI)
class App extends Component {
  private disposeScale?: () => void

  componentDidMount() {
    // 写入 :root 的 --nut-scale-f / --nut-scale-font / --nut-scale-icon，与组件内 scale-* 一致
    this.disposeScale = initScaleF()
  }

  componentWillUnmount() {
    this.disposeScale?.()
  }

  render() {
    return this.props.children
  }
}
export default App
