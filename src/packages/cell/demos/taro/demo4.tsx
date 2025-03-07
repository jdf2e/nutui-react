import React from 'react'
import { Cell, Switch } from '@nutui/nutui-react-taro'

const App = () => {
  return (
    <Cell.Group>
      <Cell title="Switch" align="center" extra={<Switch defaultChecked />} />
    </Cell.Group>
  )
}
export default App
