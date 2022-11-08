import { Component } from 'react'
import '@/sites/assets/styles/reset.scss'
import NutUI from '@/packages/nutui.react.taro.scss'
import './app.scss'

console.log(NutUI)
class App extends Component {
  render() {
    return this.props.children
  }
}
export default App
