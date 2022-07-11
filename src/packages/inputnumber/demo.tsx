import React, { useState } from 'react'
import { useTranslate } from '../../sites/assets/locale'
import { InputNumber } from './inputnumber'
import Cell from '@/packages/cell'
import Toast from '@/packages/toast'

interface IValState {
  val1: number | string
  val2: number | string
  val3: number | string
  val4: number | string
  val5: number | string
  val6: number | string
  val7: number | string
  val8: number | string
}

interface T {
  '6333c786': string
  '0137871a': string
  '84aa6bce': string
  '55cc5fb7': string
  '9636103a': string
  '181965e2': string
  e7b2ce1f: string
  '3a42134b': string
  '65bafb1d': string
  '7e2394ae': string
}
const InputNumberDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '6333c786': '超出限制事件触发',
      '0137871a': '异步演示2秒后更改',
      '84aa6bce': '基础用法',
      '55cc5fb7': '步长设置',
      '9636103a': '限制输入范围',
      '181965e2': '禁用操作',
      e7b2ce1f: '只读禁用输入框',
      '3a42134b': '支持小数点',
      '65bafb1d': '支持异步修改',
      '7e2394ae': '自定义按钮大小',
    },
    'zh-TW': {
      '6333c786': '超出限制事件觸發',
      '0137871a': '異步演示2秒後更改',
      '84aa6bce': '基礎用法',
      '55cc5fb7': '步長設置',
      '9636103a': '限制輸入範圍',
      '181965e2': '禁用操作',
      e7b2ce1f: '只讀禁用輸入框',
      '3a42134b': '支持小數點',
      '65bafb1d': '支持異步修改',
      '7e2394ae': '自定義按鈕大小',
    },
    'en-US': {
      '6333c786': 'Exceeded limit event triggered',
      '0137871a': 'Async demo changes after 2 seconds',
      '84aa6bce': 'Basic usage',
      '55cc5fb7': 'Step size setting',
      '9636103a': 'Limit input range',
      '181965e2': 'Disable operation',
      e7b2ce1f: 'read-only disabled input box',
      '3a42134b': 'support decimal point',
      '65bafb1d': 'Support for asynchronous modification',
      '7e2394ae': 'custom button size',
    },
  })

  const [inputState, setInputState] = useState<IValState>({
    val1: 1,
    val2: 0,
    val3: 10,
    val4: 0,
    val5: 1,
    val6: 5.5,
    val7: 1,
    val8: 1,
  })
  const overlimit = (e: MouseEvent) => {
    console.log(e)
    Toast.warn(translated['6333c786'])
  }
  const onChange = (value: string | number) => {
    Toast.loading(translated['0137871a'])
    setTimeout(() => {
      inputState.val7 = Number(value)
      setInputState({ ...inputState })
      Toast.hide()
    }, 2000)
  }
  return (
    <>
      <div className="demo">
        <h2>{translated['84aa6bce']}</h2>
        <Cell>
          <InputNumber modelValue={inputState.val1} />
        </Cell>
        <h2>{translated['55cc5fb7']}</h2>
        <Cell>
          <InputNumber modelValue={inputState.val2} step="5" />
        </Cell>
        <h2>{translated['9636103a']}</h2>
        <Cell>
          <InputNumber modelValue={inputState.val3} min="10" max="20" overlimit={overlimit} />
        </Cell>
        <h2>{translated['181965e2']}</h2>
        <Cell>
          <InputNumber modelValue={inputState.val4} disabled />
        </Cell>
        <h2>{translated.e7b2ce1f}</h2>
        <Cell>
          <InputNumber modelValue={inputState.val5} readonly />
        </Cell>
        <h2>{translated['3a42134b']}</h2>
        <Cell>
          <InputNumber modelValue={inputState.val6} step="0.1" decimalPlaces="1" readonly />
        </Cell>
        <h2>{translated['65bafb1d']}</h2>
        <Cell>
          <InputNumber modelValue={inputState.val7} change={onChange} isAsync />
        </Cell>
        <h2>{translated['7e2394ae']}</h2>
        <Cell>
          <InputNumber modelValue={inputState.val8} buttonSize="30" inputWidth="50" />
        </Cell>
      </div>
    </>
  )
}

export default InputNumberDemo
