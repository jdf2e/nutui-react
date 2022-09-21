import { Component } from 'react'
import '@/sites/assets/styles/reset.scss'
import './app.scss'

class App extends Component {
  render() {
    return this.props.children
  }
}
export default App
