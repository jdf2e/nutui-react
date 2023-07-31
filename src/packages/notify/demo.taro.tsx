import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Notify, Cell } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import { NotifyPosition, NotifyType } from '@/packages/notify/notify.taro'

const NotifyDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      func: '函数调用',
      t1: '通知类型',
      t2: '自定义样式',
      t3: '自定义时长为5秒',
      cusPostion: '自定义位置',
      useTemplate: '组件调用',
      primaryNotify: '主要通知',
      successNotify: '成功通知',
      errorNotify: '危险通知',
      warningNotify: '警告通知',
      cusBgNotify: '自定义背景色和字体颜色',
    },
    'en-US': {
      basic: 'Basic Usage',
      func: 'function call',
      t1: 'Notify Type',
      t2: 'Custom Style',
      t3: 'Custom Duration 5s',
      cusPostion: 'Custom Postion',
      useTemplate: 'Template use',
      primaryNotify: 'Primary Notify',
      successNotify: 'Success Notify',
      errorNotify: 'Error Notify',
      warningNotify: 'Warning Notify',
      cusBgNotify: 'Customize background and font colors',
    },
  })
  const [showNotify, SetShowNotify] = useState(false)
  const [customShow, SetCustomShow] = useState(false)
  const [states, SetStates] = useState({
    message: '',
    type: 'danger',
    duration: 2000,
    position: 'top',
  })
  const changeNotify = (
    message: string,
    type?: string,
    duration?: number,
    position?: string
  ) => {
    const change = Object.assign(states, {
      message,
      type,
      duration,
      position,
    })
    SetStates(change)
  }
  return (
    <>
      <Header />
      <div
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
        style={{ paddingBottom: '30px' }}
      >
        <Notify
          visible={showNotify}
          type={states.type as NotifyType}
          duration={states.duration}
          position={states.position as NotifyPosition}
          onClose={() => {
            SetShowNotify(false)
          }}
          onClick={() => {
            console.log('click')
          }}
        >
          {states.message}
        </Notify>
        <h2>{translated.basic}</h2>
        <Cell
          title={translated.basic}
          onClick={() => {
            changeNotify(translated.basic)
            SetShowNotify(true)
          }}
        />
        <h2>{translated.func}</h2>
        <Notify id="test" duration={states.duration} position="bottom" />
        <Cell
          title={translated.func}
          onClick={() => {
            Notify.open('test')
          }}
        />
        <h2>{translated.t1}</h2>
        <Cell.Group>
          <Cell
            title={translated.primaryNotify}
            onClick={() => {
              changeNotify(translated.primaryNotify, 'primary')
              SetShowNotify(true)
            }}
          />
          <Cell
            title={translated.successNotify}
            onClick={() => {
              changeNotify(translated.successNotify, 'success')
              SetShowNotify(true)
            }}
          />
          <Cell
            title={translated.errorNotify}
            onClick={() => {
              changeNotify(translated.errorNotify, 'danger')
              SetShowNotify(true)
            }}
          />
          <Cell
            title={translated.warningNotify}
            onClick={() => {
              changeNotify(translated.warningNotify, 'warning')
              SetShowNotify(true)
            }}
          />
        </Cell.Group>
        <h2>{translated.t2}</h2>
        <Notify
          className="customer"
          visible={customShow}
          style={{
            '--nutui-notify-text-color': '#ad0000',
            '--nutui-notify-base-background-color': '#ffe1e1',
          }}
          onClose={() => {
            SetCustomShow(false)
          }}
        >
          {translated.cusBgNotify}
        </Notify>
        <Cell
          title={translated.cusBgNotify}
          onClick={() => {
            SetCustomShow(true)
          }}
        />
        <h2>{translated.t3}</h2>
        <Cell
          title={translated.t3}
          onClick={() => {
            changeNotify(translated.t3, 'base', 5000)
            SetShowNotify(true)
          }}
        />
        <Cell
          title={translated.cusPostion}
          onClick={() => {
            changeNotify(translated.cusPostion, 'base', 2000, 'bottom')
            SetShowNotify(true)
          }}
        />
      </div>
    </>
  )
}

export default NotifyDemo
