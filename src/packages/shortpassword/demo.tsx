import React, { useState } from 'react'
import { HeartFill1 } from '@nutui/icons-react'
import Cell from '../cell'
import Toast from '../toast'
import { ShortPassword } from './shortpassword'
import NumberKeyboard from '../numberkeyboard/index'
import { useTranslate } from '@/sites/assets/locale'

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
  const [value, setValue] = useState<string>('')
  const change = (value: string) => {
    console.log(value)
    setValue(value)
  }
  const onTips = () => {
    Toast.text(translated.forgetPassword)
  }
  const onChange1 = (v: string) => {
    setValue((value) => value + v)
  }
  const onDelete1 = () => {
    setValue((value) => String(value).slice(0, -1))
  }
  return (
    <div className="demo">
      <h2>{translated.basic}</h2>
      <Cell
        title={translated.basic}
        onClick={() => {
          setVisible1(true)
        }}
      />
      <ShortPassword
        visible={visible1}
        value={value}
        plain
        onFocus={() => setVisible2(true)}
        onClose={() => {
          setVisible1(false)
          setValue('')
        }}
        onChange={(value) => change(value)}
      />
      <NumberKeyboard
        visible={visible2}
        onClose={() => setVisible2(false)}
        onChange={onChange1}
        onDelete={onDelete1}
      />
      <h2>{translated.displayButton}</h2>
      <Cell
        title={translated.displayButton}
        onClick={() => {
          setVisible2(true)
        }}
      />
      <ShortPassword
        visible={visible3}
        value={value}
        tips={
          <>
            <HeartFill1 width={11} height={11} />
            自定义提示语
          </>
        }
        onClose={() => {
          setVisible2(false)
          setValue('')
        }}
        hideFooter={false}
        onConfirm={() => setVisible2(false)}
        onCancel={() => setVisible2(false)}
      />
      <h2>{translated.customLength}</h2>
      <Cell
        title={translated.customLength}
        onClick={() => {
          setVisible3(true)
        }}
      />
      <ShortPassword
        visible={visible3}
        value={value}
        onClose={() => {
          setVisible3(false)
          setValue('')
        }}
        length={4}
      />
      <h2>{translated.forgetPassword}</h2>
      <Cell
        title={translated.forgetPassword}
        onClick={() => {
          setVisible4(true)
        }}
      />
      <ShortPassword
        visible={visible4}
        value={value}
        onClose={() => {
          setVisible4(false)
          setValue('')
        }}
        onTips={() => onTips()}
      />
      <h2>自动聚焦</h2>
      <Cell
        title="自动聚焦"
        onClick={() => {
          setVisible5(true)
        }}
      />
      <ShortPassword
        visible={visible5}
        value={value}
        onClose={() => {
          setVisible5(false)
          setValue('')
        }}
        autoFocus
      />
    </div>
  )
}

export default ShortPasswordDemo
