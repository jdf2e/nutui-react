import React, { useState } from 'react'
import { ShortPassword, Cell, Toast } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'

const ShortPasswordDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      displayButton: '显示按钮组',
      customLength: '自定义密码长度: 4',
      forgetPassword: '忘记密码提示语事件回调',
    },
    'zh-TW': {
      basic: '基礎用法',
      displayButton: '顯示按鈕組',
      customLength: '自定義密碼長度: 4',
      forgetPassword: '忘記密碼提示語事件回調',
    },
    'en-US': {
      basic: 'Basic Usage',
      displayButton: 'Display Button',
      customLength: 'Custome Code Length: 4',
      forgetPassword: 'Forget Password Tips',
    },
  })
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  const [visible5, setVisible5] = useState(false)
  const [value, setValue] = useState<string | number>('')
  const change = (value: number | string) => {
    setValue(value)
  }
  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')
  const toastShow = (msg: any) => {
    SetToastMsg(msg)
    SetShow(true)
  }
  const onTips = () => {
    // Toast.text('执行忘记密码提示语')
    toastShow(translated.forgetPassword)
  }
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Cell
          title={translated.basic}
          isLink
          onClick={() => {
            setVisible1(true)
          }}
        />
        <ShortPassword
          visible={visible1}
          modelValue={value}
          onClose={() => {
            setVisible1(false)
            setValue('')
          }}
          onChange={(value) => change(value)}
        />
        <h2>{translated.displayButton}</h2>
        <Cell
          title={translated.displayButton}
          isLink
          onClick={() => {
            setVisible2(true)
          }}
        />
        <ShortPassword
          visible={visible2}
          modelValue={value}
          onClose={() => {
            setVisible2(false)
            setValue('')
          }}
          noButton={false}
          onOk={() => {
            setVisible2(false)
          }}
          onCancel={() => {
            setVisible2(false)
          }}
        />
        <h2>{translated.customLength}</h2>
        <Cell
          title={translated.customLength}
          isLink
          onClick={() => {
            setVisible3(true)
          }}
        />
        <ShortPassword
          visible={visible3}
          modelValue={value}
          onClose={() => {
            setVisible3(false)
            setValue('')
          }}
          length={4}
        />
        <h2>{translated.forgetPassword}</h2>
        <Cell
          title={translated.forgetPassword}
          isLink
          onClick={() => {
            setVisible4(true)
          }}
        />
        <ShortPassword
          visible={visible4}
          modelValue={value}
          onClose={() => {
            setVisible4(false)
            setValue('')
          }}
          onTips={() => onTips()}
        />
        <Toast
          type="text"
          visible={show}
          msg={toastMsg}
          onClose={() => {
            SetShow(false)
          }}
        />
        <h2>自动聚焦</h2>
        <Cell
          title="自动聚焦"
          isLink
          onClick={() => {
            setVisible5(true)
          }}
        />
        <ShortPassword
          visible={visible5}
          modelValue={value}
          onClose={() => {
            setVisible5(false)
            setValue('')
          }}
          autoFocus
        />
      </div>
    </>
  )
}

export default ShortPasswordDemo
