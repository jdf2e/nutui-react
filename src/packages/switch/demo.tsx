import React, { useState } from 'react'
import Switch from '@/packages/switch'
import Cell from '@/packages/cell'
import { useTranslate } from '@/sites/assets/locale'
import Toast from '../toast'

const SwitchDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '非受控',
      disabled: '禁用状态',
      asyncControl: '受控',
      customColor: '自定义颜色',
      supportText: '支持文字',
      open: '开',
      close: '关',
      eventTip: '触发了 onChange 事件，开关状态：',
      async: '2秒后异步触发',
    },
    'zh-TW': {
      basic: '非受控',
      disabled: '禁用狀態',
      asyncControl: '受控',
      customColor: '自定義顏色',
      supportText: '支持文字',
      open: '開',
      close: '關',
      eventTip: '觸發了 onChange 事件，開關狀態：',
      async: '2秒後異步觸發',
    },
    'en-US': {
      basic: 'Uncontrolled',
      disabled: 'Disabled',
      asyncControl: 'controlled',
      customColor: 'Custom Color',
      supportText: 'Support Text',
      open: 'Open',
      close: 'cClose',
      eventTip: 'Emit onChange event, current state:',
      async: 'Triggered asynchronously after 2 seconds',
    },
  })
  const [checkedAsync, setCheckedAsync] = useState(true)
  const onChange = (
    value: boolean,
    event: React.MouseEvent<Element, MouseEvent>
  ) => {
    Toast.text(`${translated.eventTip}${value}`)
  }
  const onChangeAsync = (value: boolean, event: any) => {
    Toast.text(`${translated.async} ${value}`)
    setTimeout(() => {
      setCheckedAsync(value)
    }, 2000)
  }
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell>
          <Switch defaultChecked />
        </Cell>
        <h2>{translated.asyncControl}</h2>
        <Cell>
          <Switch
            checked={checkedAsync}
            onChange={(value, event) => onChangeAsync(value, event)}
          />
        </Cell>
        <h2>{translated.disabled}</h2>
        <Cell>
          <Switch defaultChecked disabled />
        </Cell>
        <h2>onChange</h2>
        <Cell>
          <Switch onChange={(value, event) => onChange(value, event)} />
        </Cell>

        <h2>{translated.customColor}</h2>
        <Cell>
          <Switch style={{ '--nutui-switch-open-bg-color': 'blue' }} />
        </Cell>
        <h2>{translated.supportText}</h2>
        <Cell>
          <Switch
            activeText={translated.open}
            inactiveText={translated.close}
          />
        </Cell>
      </div>
    </>
  )
}

export default SwitchDemo
