import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { HeartFill1 } from '@nutui/icons-react-taro'
import {
  ShortPassword,
  Cell,
  NumberKeyboard,
} from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'

const ShortPasswordDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      displayPlain: '展示明文',
      displayButton: '显示按钮组',
      customLength: '自定义密码长度: 4',
      forgetPassword: '忘记密码提示语事件回调',
      autoFocus: '自动聚焦',
    },
    'zh-TW': {
      basic: '基礎用法',
      displayPlain: '展示明文',
      displayButton: '顯示按鈕組',
      customLength: '自定義密碼長度: 4',
      forgetPassword: '忘記密碼提示語事件回調',
      autoFocus: '自動聚焦',
    },
    'en-US': {
      basic: 'Basic Usage',
      displayPlain: 'Display Plaintext',
      displayButton: 'Display Button',
      customLength: 'Custome Code Length: 4',
      forgetPassword: 'Forget Password Tips',
      autoFocus: 'AutoFocus',
    },
  })
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  const [visible5, setVisible5] = useState(false)
  const [visible6, setVisible6] = useState(false)
  const [value, setValue] = useState<string>('')
  const [value0, setValue0] = useState<string>('')
  const onTips = () => {
    console.log(translated.forgetPassword)
  }
  // NumberKeyboard
  const [visible, setVisible] = useState(false)
  const onChange = (v: string) => {
    setValue((value) => value + v)
  }
  const onDelete = () => {
    setValue((value) => value.slice(0, -1))
  }
  const [visible0, setVisible0] = useState(false)
  const onChange0 = (v: string) => {
    setValue0((value) => value + v)
  }
  const onDelete0 = () => {
    setValue0((value) => value.slice(0, -1))
  }
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <NumberKeyboard
          visible={visible}
          onClose={() => setVisible(false)}
          onChange={onChange}
          onDelete={onDelete}
        />

        <h2>{translated.basic}</h2>
        <Cell title={translated.basic} onClick={() => setVisible1(true)} />
        <ShortPassword
          visible={visible1}
          value={value}
          onFocus={() => setVisible(true)}
          onClose={() => {
            setVisible1(false)
            setValue('')
          }}
          onChange={(value) => setValue(value)}
        />

        <h2>{translated.displayPlain}</h2>
        <Cell
          title={translated.displayPlain}
          onClick={() => setVisible2(true)}
        />
        <ShortPassword
          visible={visible2}
          value={value}
          plain
          onFocus={() => setVisible(true)}
          onClose={() => {
            setVisible2(false)
            setValue('')
          }}
          onChange={(value) => setValue(value)}
        />

        <h2>{translated.displayButton}</h2>
        <Cell
          title={translated.displayButton}
          onClick={() => setVisible3(true)}
        />
        <ShortPassword
          visible={visible3}
          value={value}
          tips={
            <>
              <HeartFill1 size={11} />
              自定义提示语
            </>
          }
          hideFooter={false}
          onFocus={() => setVisible(true)}
          onClose={() => {
            setVisible3(false)
            setValue('')
          }}
          onChange={(value) => setValue(value)}
          onConfirm={() => setVisible3(false)}
          onCancel={() => setVisible3(false)}
        />

        <h2>{translated.customLength}</h2>
        <Cell
          title={translated.customLength}
          onClick={() => setVisible4(true)}
        />
        <ShortPassword
          visible={visible4}
          value={value0}
          onFocus={() => setVisible0(true)}
          onClose={() => {
            setVisible4(false)
            setValue0('')
          }}
          onChange={(value) => setValue0(value)}
          length={4}
        />
        <NumberKeyboard
          visible={visible0}
          onClose={() => setVisible0(false)}
          onChange={onChange0}
          onDelete={onDelete0}
        />

        <h2>{translated.forgetPassword}</h2>
        <Cell
          title={translated.forgetPassword}
          onClick={() => setVisible5(true)}
        />
        <ShortPassword
          visible={visible5}
          value={value}
          onFocus={() => setVisible(true)}
          onClose={() => {
            setVisible5(false)
            setValue('')
          }}
          onChange={(value) => setValue(value)}
          onTips={() => onTips()}
        />

        <h2>自动聚焦</h2>
        <Cell title="自动聚焦" onClick={() => setVisible6(true)} />
        <ShortPassword
          visible={visible6}
          value={value}
          onFocus={() => setVisible(true)}
          onClose={() => {
            setVisible6(false)
            setValue('')
          }}
          onChange={(value) => setValue(value)}
          autoFocus
        />
      </div>
    </>
  )
}

export default ShortPasswordDemo
