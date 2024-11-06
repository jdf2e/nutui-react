import { Component } from 'react'
import Taro from '@tarojs/taro'
import './app.scss'

if (Taro.getEnv() !== 'RN') {
    import('@/sites/assets/styles/reset.scss');
    import('@/packages/nutui.react.scss.taro');
    import('@nutui/touch-emulator');
}
// console.log(NutUI)
class App extends Component {
  render() {
    return this.props.children
  }
}
export default App
