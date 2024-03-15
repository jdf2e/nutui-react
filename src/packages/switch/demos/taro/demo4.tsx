import React from 'react'
import { Cell, Switch } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'

const Demo4 = (props: { text: string; title: string }) => {
  const onChange = (
    value: boolean,
    event: React.MouseEvent<Element, MouseEvent>
  ) => {
    Taro.showToast({ title: `${props.text}${value}` })
  }
  return (
    <>
      <h2>{props.title}</h2>
      <Cell>
        <Switch
          defaultChecked
          onChange={(value, event) => onChange(value, event)}
        />
      </Cell>
    </>
  )
}
export default Demo4
