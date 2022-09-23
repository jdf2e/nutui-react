import React, { useState } from 'react'
import { Switch, Cell } from '@/packages/nutui.react.taro'

const SwitchDemo = () => {
  const [checkedAsync, setCheckedAsync] = useState(true)
  const change = (
    value: boolean,
    event: React.MouseEvent<Element, MouseEvent>
  ) => {
    console.log(`触发了change事件，开关状态：${value}`)
  }
  const changeAsync = (value: boolean, event: any) => {
    console.log(`2秒后异步触发 ${value}`)
    setTimeout(() => {
      setCheckedAsync(value)
    }, 2000)
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell>
          <Switch checked />
        </Cell>
        <h2>禁用状态</h2>
        <Cell>
          <Switch checked disable />
        </Cell>
        <h2>change事件</h2>
        <Cell>
          <Switch change={(value, event) => change(value, event)} />
        </Cell>
        <h2>异步控制</h2>
        <Cell>
          <Switch
            checked={checkedAsync}
            isAsync
            change={(value, event) => changeAsync(value, event)}
          />
        </Cell>
        <h2>自定义颜色</h2>
        <Cell>
          <Switch activeColor="blue" />
        </Cell>
        <h2>支持文字</h2>
        <Cell>
          <Switch activeText="开" inactiveText="关" />
        </Cell>
      </div>
    </>
  )
}

export default SwitchDemo
