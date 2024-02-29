import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import {
  InputNumber,
  Cell,
  Toast,
  ConfigProvider,
} from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

interface T {
  '6333c786': string
  '0137871a': string
  '84aa6bce': string
  '55cc5fb7': string
  '9636103a': string
  '181965e2': string
  e7b2ce1f: string
  e7b2ce1g: string
  e7b2ce1y: string
  '3a42134b': string
  '65bafb1d': string
  '7e2394ae': string
  '7e2394be': string
}

const customTheme = {
  nutuiInputnumberButtonWidth: '30px',
  nutuiInputnumberButtonHeight: '30px',
  nutuiInputnumberButtonBorderRadius: '2px',
  nutuiInputnumberInputBackgroundColor: '#fff',
  nutuiInputnumberButtonBackgroundColor: `#f4f4f4`,
  nutuiInputnumberInputHeight: '30px',
  nutuiInputnumberInputMargin: '0 2px',
}

const customTheme2 = {
  nutuiInputnumberButtonWidth: '30px',
  nutuiInputnumberButtonHeight: '30px',
  nutuiInputnumberButtonBackgroundColor: `#f4f4f4`,
  nutuiInputnumberInputBackgroundColor: '#fff',
  nutuiInputnumberInputMargin: '0 2px',
}

const customTheme3 = {
  nutuiInputnumberInputWidth: '60px',
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
      e7b2ce1g: '自定义按钮样式1',
      e7b2ce1y: '自定义按钮样式2',
      '3a42134b': '支持小数点',
      '65bafb1d': '支持异步修改',
      '7e2394ae': '自定义按钮大小',
      '7e2394be': '支持formatter',
    },
    'zh-TW': {
      '6333c786': '超出限制事件觸發',
      '0137871a': '異步演示2秒後更改',
      '84aa6bce': '基礎用法',
      '55cc5fb7': '步長設置',
      '9636103a': '限制輸入範圍',
      '181965e2': '禁用操作',
      e7b2ce1f: '只讀禁用輸入框',
      e7b2ce1g: '自定義按钮样式1',
      e7b2ce1y: '自定義按钮样式2',
      '3a42134b': '支持小數點',
      '65bafb1d': '支持異步修改',
      '7e2394ae': '自定義按鈕大小',
      '7e2394be': '支持formatter',
    },
    'en-US': {
      '6333c786': 'Exceeded limit event triggered',
      '0137871a': 'Async demo changes after 2 seconds',
      '84aa6bce': 'Basic usage',
      '55cc5fb7': 'Step size setting',
      '9636103a': 'Limit input range',
      '181965e2': 'Disable operation',
      e7b2ce1f: 'read-only disabled input box',
      e7b2ce1g: 'Custom Button CSS1',
      e7b2ce1y: 'Custom Button CSS2',
      '3a42134b': 'support decimal point',
      '65bafb1d': 'Support for asynchronous modification',
      '7e2394ae': 'custom button size',
      '7e2394be': 'support formatter',
    },
  })

  const [inputValue, setInputValue] = useState(-1)
  const overlimit = () => {
    toastShow(translated['6333c786'], 'warn')
  }
  const onChange = (value: string | number) => {
    toastShow(translated['0137871a'], 'loading')
    setTimeout(() => {
      setInputValue(Number(value))
      SetShow(false)
    }, 2000)
  }
  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')
  const [toastType, SetToastType] = useState('text')
  const toastShow = (msg: any, type: string) => {
    SetToastMsg(msg)
    SetToastType(type)
    SetShow(true)
  }
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated['84aa6bce']}</h2>
        <Cell>
          <InputNumber defaultValue={1} allowEmpty />
        </Cell>

        <h2>{translated['55cc5fb7']}</h2>
        <Cell>
          <InputNumber defaultValue={0} min={0} step={5} />
        </Cell>

        <h2>{translated['9636103a']}</h2>
        <Cell>
          <InputNumber
            defaultValue={10}
            min={10}
            max={20}
            onOverlimit={overlimit}
          />
        </Cell>

        <h2>{translated['181965e2']}</h2>
        <Cell>
          <InputNumber defaultValue={0} disabled />
        </Cell>

        <h2>{translated.e7b2ce1f}</h2>
        <Cell>
          <InputNumber defaultValue={1} readOnly />
        </Cell>

        <h2>{translated.e7b2ce1g}</h2>
        <Cell>
          <ConfigProvider theme={customTheme}>
            <InputNumber defaultValue={1} />
          </ConfigProvider>
        </Cell>

        <h2>{translated.e7b2ce1y}</h2>
        <Cell>
          <ConfigProvider theme={customTheme2}>
            <InputNumber defaultValue={1} />
          </ConfigProvider>
        </Cell>

        <h2>{translated['3a42134b']}</h2>
        <Cell>
          <InputNumber defaultValue={5.5} step={0.1} digits={1} readOnly />
        </Cell>

        <h2>{translated['65bafb1d']}</h2>
        <Cell>
          <InputNumber value={inputValue} min={-6} onChange={onChange} async />
        </Cell>

        <h2>支持formatter</h2>
        <Cell>
          <ConfigProvider theme={customTheme3}>
            <InputNumber
              className="format-width"
              defaultValue={1000}
              min={10}
              max={15020}
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
            />
          </ConfigProvider>
        </Cell>
        <Cell>
          <ConfigProvider theme={customTheme3}>
            <InputNumber
              className="format-width"
              defaultValue={100}
              min={0}
              max={100}
              formatter={(value) => `${value}%`}
            />
          </ConfigProvider>
        </Cell>
        <Toast
          type={toastType}
          visible={show}
          msg={toastMsg}
          onClose={() => {
            SetShow(false)
          }}
        />
      </div>
    </>
  )
}

export default InputNumberDemo
