import React, { useState } from 'react'
import { Cell, Switch } from '@nutui/nutui-react'
import Toast from '../../../toast'

const Demo2 = (props: { text: string; title: string }) => {
  const [checkedAsync, setCheckedAsync] = useState(true)
  const onChangeAsync = (value: boolean, event: any) => {
    Toast.show(`${props.text} ${value}`)
    setTimeout(() => {
      setCheckedAsync(value)
    }, 2000)
  }
  return (
    <>
      <h2>{props.title}</h2>
      <Cell>
        <Switch
          checked={checkedAsync}
          onChange={(value, event) => onChangeAsync(value, event)}
        />
      </Cell>
    </>
  )
}
export default Demo2
