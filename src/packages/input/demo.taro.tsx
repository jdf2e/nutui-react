import React, { useState } from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Input, Button } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import Taro from '@tarojs/taro'

interface Idata {
  val1: string
  text: string
  password: string
  number: string
  digit: string
  tel: string
  readonly: string
  disabled: string
  showIcon: string
  required: string
  error1: string
  error2: string
  buttonVal: string
  format1: string
  format2: string
  textarea: string
  align1: string
  align2: string
  noBorder1: string
  noBorder2: string
  event: string
}
const InputDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基本用法',
      title1: '自定义类型',
      title2: '禁用和只读',
      title3: '显示图标',
      title4: '错误提示',
      title5: '插入按钮',
      title6: '格式化输入内容',
      title7: '显示字数统计',
      title8: '对齐方式',
      title9: '无边框',
      title10: '点击事件',
      text: '文本',
      password: '密码',
      number: '数字',
      digit: '整数',
      tel: '手机号',
      readonly: '只读',
      disabled: '禁用',
      icon: '显示图标',
      clear: '显示清除图标',
      required: '必填项',
      error: '输入内容标红',
      errorBottom: '底部错误提示文案',
      code: '短信验证码',
      codeplaceholder: '请输入短信验证码',
      sendCode: '发送验证码',
      message: '留言',
      noBorder: '无边框',
      click: '点击',
      placeholder1: '在输入时执行格式化',
      text1: '校验文本中无数字',
      placeholder2: '在失焦时执行格式化',
      placeholder3: '请输入留言',
      placeholder4: '文本内容对齐',
      placeholder5: '输入框内容对齐',
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Custom Type',
      title2: 'Readonly And Disabled',
      title3: 'Show Icon',
      title4: 'Error Info',
      title5: 'Insert Button',
      title6: 'Format Value',
      title7: 'Show Word Limit',
      title8: 'Input Align',
      title9: 'No Border',
      title10: 'Click Event',
      text: 'Text',
      password: 'Password',
      number: 'Number',
      digit: 'Digit',
      tel: 'Tel',
      readonly: 'Readonly',
      disabled: 'Disabled',
      icon: 'Show Icon',
      clear: 'Show Clear Icon',
      required: 'Required',
      error: 'Error',
      errorBottom: 'Error Message',
      code: 'Code',
      codeplaceholder: 'Please enter code',
      sendCode: 'Send',
      message: 'Message',
      noBorder: 'No Border',
      click: 'Click',
      placeholder1: 'Format On Change',
      text1: 'Check no digits',
      placeholder2: 'Format On Blur',
      placeholder3: 'Message',
      placeholder4: 'Label Align',
      placeholder5: 'Input Align',
    },
  })
  const [value, UpdateValue] = useState('')
  const [state, setState] = useState({
    val1: '',
    text: '',
    password: '',
    number: '',
    digit: '',
    tel: '',
    readonly: '',
    disabled: '',
    showIcon: '',
    required: '',
    error1: '',
    error2: '',
    buttonVal: '',
    format1: '',
    format2: '',
    textarea: '',
    align1: '',
    align2: '',
    noBorder1: '',
    noBorder2: '',
    event: '',
    clear: '',
  })

  const change = (value: string | number, event: Event) => {
    console.log('change: ', value)
  }
  const focus = (value: string | number, event: Event) => {
    console.log('focus:', value, event)
  }
  const blur = (value: string | number, event: Event) => {
    console.log('blur:', value, event)
  }
  const clear = (value: string | number, event: Event) => {
    console.log('clear:', value, event)
  }
  const click = (value: string | number) => {
    console.log('click:', value)
  }
  const clickInput = (value: string | number) => {
    console.log('clickInput:', value)
  }
  const clickLeftIcon = (value: string | number) => {
    console.log('clickLeftIcon:', value)
  }
  const clickRightIcon = (value: string | number) => {
    console.log('clickRightIcon:', value)
  }
  const formatter = (value: string) => value.replace(/\d/g, '')

  return (
    <>
      <Header />
      <div
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
        style={{ paddingBottom: '20px' }}
      >
        <h2>{translated.basic}</h2>
        <Input
          name="text"
          label={translated.text}
          placeholder={translated.text}
          defaultValue={value}
          onChange={(val) => {
            console.log('change value:', val)
            UpdateValue(val)
          }}
        />
        <h2>{translated.title1}</h2>
        <Input
          name="text"
          label={translated.text}
          placeholder={translated.text}
          defaultValue={state.val1}
        />
        <Input
          name="password"
          label={translated.password}
          placeholder={translated.password}
          defaultValue={state.password}
          type="password"
        />
        <Input
          name="number"
          label={translated.number}
          placeholder={translated.number}
          defaultValue={state.number}
          type="number"
        />
        <Input
          name="digit"
          label={translated.digit}
          placeholder={translated.digit}
          defaultValue={state.digit}
          type="digit"
        />
        <Input
          name="tel"
          label={translated.tel}
          placeholder={translated.tel}
          defaultValue={state.tel}
          type="tel"
        />
        <h2>{translated.title2}</h2>
        <Input
          label={translated.text}
          placeholder={translated.readonly}
          defaultValue={state.readonly}
          readonly
        />
        <Input
          label={translated.text}
          placeholder={translated.disabled}
          defaultValue={state.disabled}
          disabled
        />
        <h2>{translated.title3}</h2>
        <Input
          label={translated.text}
          placeholder={translated.icon}
          defaultValue={state.showIcon}
          leftIcon="dongdong"
          rightIcon="ask2"
        />
        <Input
          label={translated.text}
          placeholder={translated.clear}
          defaultValue={state.clear}
          clearable
          clearSize="14"
        />
        <h2>{translated.title4}</h2>
        <Input
          label={translated.text}
          placeholder={translated.required}
          defaultValue={state.required}
          required
        />
        <Input
          label={translated.text}
          placeholder={translated.error}
          defaultValue={state.error1}
          error
        />
        <Input
          label={translated.text}
          placeholder={translated.errorBottom}
          defaultValue={state.error2}
          errorMessage={translated.errorBottom}
        />
        <h2>{translated.title5}</h2>
        <Input
          label={translated.code}
          placeholder={translated.codeplaceholder}
          defaultValue={state.buttonVal}
          clearable
          center
          slotButton={
            <Button size="small" type="primary">
              {translated.sendCode}
            </Button>
          }
        />
        <h2>
          {translated.title6}
          <span style={{ fontSize: '12px', paddingLeft: '10px' }}>
            ({translated.text1})
          </span>
        </h2>
        <Input
          label={translated.text}
          placeholder={translated.placeholder1}
          defaultValue={state.format1}
          formatter={formatter}
        />
        <Input
          label={translated.text}
          placeholder={translated.placeholder2}
          defaultValue={state.format2}
          formatter={formatter}
          formatTrigger="onBlur"
        />
        <h2>{translated.title7}</h2>
        <Input
          label={translated.message}
          placeholder={translated.message}
          defaultValue={state.textarea}
          type="textarea"
          showWordLimit
          rows="2"
          maxlength="50"
        />
        <h2>{translated.title8}</h2>
        <Input
          label={translated.text}
          placeholder={translated.placeholder4}
          defaultValue={state.align1}
          labelAlign="right"
        />
        <Input
          label={translated.text}
          placeholder={translated.placeholder5}
          defaultValue={state.align2}
          inputAlign="right"
        />
        <h2>{translated.title9}</h2>
        <Input
          label={translated.noBorder}
          placeholder={translated.noBorder}
          defaultValue={state.noBorder1}
          border={false}
        />
        <Input
          label={translated.noBorder}
          placeholder={translated.noBorder}
          defaultValue={state.noBorder2}
          border={false}
        />
        <h2>{translated.title10}</h2>
        <Input
          label={translated.click}
          placeholder={translated.click}
          defaultValue={state.event}
          leftIcon="dongdong"
          rightIcon="ask2"
          clearable
          onChange={change}
          onFocus={focus}
          onBlur={blur}
          onClear={clear}
          onClick={click}
          onClickInput={clickInput}
          onClickLeftIcon={clickLeftIcon}
          onClickRightIcon={clickRightIcon}
        />
      </div>
    </>
  )
}

export default InputDemo
