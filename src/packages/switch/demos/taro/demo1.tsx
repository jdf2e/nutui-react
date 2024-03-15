import React from 'react'
import { Cell, Switch } from '@nutui/nutui-react-taro'

const Demo1 = (props:{title:string}) => {
  return (
    <>
        <h2>{props.title}</h2>
        <Cell>
          <Switch defaultChecked />
        </Cell>
    </>
  )
}
export default Demo1
