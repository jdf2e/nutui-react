import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { Ask, Close } from '@nutui/icons-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Input, Button } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

const InputDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      uncontrolled: '非受控',
      controlled: '受控',
      title1: '自定义类型',
      title2: '禁用和只读',
      title3: '显示清除图标',
      title5: '插入按钮',
      title6: '格式化输入内容',
      title7: '显示字数统计',
      title8: '对齐方式',
      title9: '无边框',
      title10: '事件',
      title11: '布局',
      text: '请输入文本',
      password: '请输入密码',
      number: '请输入数字',
      digit: '请输入整数',
      readonly: '输入框只读',
      disabled: '输入框禁用',
      clear: '显示清除图标',
      codeplaceholder: '请输入短信验证码',
      sendCode: '获取验证码',
      formatter: '在输入时执行格式化',
      formatter2: '在失焦时执行格式化',
      align: '文本内容对齐',
      placeholder5: '输入框内容对齐',
    },
    'en-US': {
      basic: 'Basic usage',
      uncontrolled: 'uncontrolled',
      controlled: 'Controlled',
      title1: 'Custom Type',
      title2: 'Disabled and read-only',
      title3: 'Show clear icon',
      title5: 'Insert button',
      title6: 'Format input content',
      title7: 'Display word count',
      title8: 'Alignment',
      title9: 'No Border',
      title10: 'event',
      title11: 'Layout',
      text: 'Please enter text',
      password: 'Please enter a password',
      number: 'Please enter a number',
      digit: 'Please enter an integer',
      readonly: 'Input box is read-only',
      disabled: 'Input box disabled',
      clear: 'Show clear icon',
      codeplaceholder: 'Please enter the SMS verification code',
      sendCode: 'Get code',
      formatter: 'Perform formatting on input',
      formatter2: 'Perform formatting when out of focus',
      align: 'text content alignment',
      placeholder5: 'Input box content alignment',
    },
  })
  const formatter = (value: string) => value.replace(/\d/g, '')
  const [val, setVal] = useState('NutUI React')

  return (
    <>
      <Header />
      <div
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
        style={{ paddingBottom: '20px' }}
      >
        <h2>{translated.basic}</h2>
        <Input placeholder={translated.text} />
        <h2>{translated.uncontrolled}</h2>
        <Input defaultValue="NutUI React" placeholder={translated.text} />
        <h2>{translated.controlled}</h2>
        <Input
          value={val}
          onChange={(val) => setVal(val)}
          placeholder={translated.text}
        />
        <h2>{translated.title1}</h2>
        <Input type="text" placeholder={translated.text} />
        <Input type="password" placeholder={translated.password} />
        <Input type="digit" placeholder={translated.digit} />
        <Input type="number" placeholder={translated.number} />
        <h2>{translated.title2}</h2>
        <Input readonly placeholder={translated.readonly} />
        <Input disabled placeholder={translated.disabled} />
        <h2>{translated.title3}</h2>
        <Input clearable placeholder={translated.clear} />
        <Input clearable clearIcon={<Close />} placeholder={translated.clear} />
        <h2>{translated.title6}</h2>
        <Input formatter={formatter} placeholder={translated.formatter} />
        <Input
          formatter={formatter}
          formatTrigger="onBlur"
          placeholder={translated.formatter2}
        />
        <h2>{translated.title8}</h2>
        <Input align="left" placeholder={translated.align} />
        <Input align="right" placeholder={translated.align} />
        <h2>{translated.title10}</h2>
        <Input
          placeholder={translated.title10}
          onClick={() => Taro.showToast({ title: 'onClick' })}
        />
        <h2>{translated.title11}</h2>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#fff',
            padding: '0 10px',
          }}
        >
          <Ask />
          <Input placeholder={translated.codeplaceholder} />
          <div className="right">
            <Button type="primary" size="small">
              {translated.sendCode}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default InputDemo
