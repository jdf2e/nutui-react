import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Notify, Cell, CellGroup } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

interface T {
  basic: string
  numbers: string
  autoHeight: string
  readOnly: string
  readOnlyState: string
  disabled: string
  disabledState: string
}
const NotifyDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基本用法',
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
    msg: '',
    type: 'danger',
    duration: 2000,
    position: 'top',
    color: '',
    background: '',
  })
  const changeNotify = (
    msg: string,
    type?: string,
    duration?: number,
    color?: string,
    position?: string
  ) => {
    const change = Object.assign(states, {
      msg,
      type,
      duration,
      color,
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
          msg={states.msg}
          type={states.type}
          duration={states.duration}
          position={states.position}
          onClosed={() => {
            SetShowNotify(false)
          }}
          onClick={() => {
            console.log('click')
          }}
        />
        <h2>{translated.basic}</h2>
        <Cell
          title={translated.basic}
          onClick={(event: React.MouseEvent) => {
            changeNotify(translated.basic)
            SetShowNotify(true)
          }}
        />
        <h2>{translated.t1}</h2>
        <CellGroup>
          <Cell
            title={translated.primaryNotify}
            onClick={(event: React.MouseEvent) => {
              changeNotify(translated.primaryNotify, 'primary')
              SetShowNotify(true)
            }}
          />
          <Cell
            title={translated.successNotify}
            onClick={(event: React.MouseEvent) => {
              changeNotify(translated.successNotify, 'success')
              SetShowNotify(true)
            }}
          />
          <Cell
            title={translated.errorNotify}
            onClick={(event: React.MouseEvent) => {
              changeNotify(translated.errorNotify, 'danger')
              SetShowNotify(true)
            }}
          />
          <Cell
            title={translated.warningNotify}
            onClick={(event: React.MouseEvent) => {
              changeNotify(translated.warningNotify, 'warning')
              SetShowNotify(true)
            }}
          />
        </CellGroup>
        <h2>{translated.t2}</h2>
        <Notify
          className="customer"
          visible={customShow}
          msg={translated.cusBgNotify}
          color="#ad0000"
          background="#ffe1e1"
          onClosed={() => {
            SetCustomShow(false)
          }}
        />
        <Cell
          title={translated.cusBgNotify}
          onClick={(event: React.MouseEvent) => {
            SetCustomShow(true)
          }}
        />
        <h2>{translated.t3}</h2>
        <Cell
          title={translated.t3}
          onClick={(event: React.MouseEvent) => {
            changeNotify(translated.t3, 'base', 5000)
            SetShowNotify(true)
          }}
        />
        <Cell
          title={translated.cusPostion}
          onClick={(event: React.MouseEvent) => {
            changeNotify(translated.cusPostion, 'base', 2000, '', 'bottom')
            SetShowNotify(true)
          }}
        />
      </div>
    </>
  )
}

export default NotifyDemo
