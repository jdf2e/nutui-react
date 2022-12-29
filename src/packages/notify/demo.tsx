import React from 'react'
import Notify from './notify'
import Cell from '@/packages/cell'
import CellGroup from '@/packages/cellgroup'
import { useTranslate } from '../../sites/assets/locale'

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
      t3: '自定义时长',
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
      t3: 'Custom Duration',
      cusPostion: 'Custom Postion',
      useTemplate: 'Template use',
      primaryNotify: 'Primary Notify',
      successNotify: 'Success Notify',
      errorNotify: 'Error Notify',
      warningNotify: 'Warning Notify',
      cusBgNotify: 'Customize background and font colors',
    },
  })
  const baseNotify = (msg: string) => {
    Notify.text(msg, {
      onClosed: () => {
        console.log('close')
      },
      onClick: () => {
        console.log('click')
      },
    })
  }
  const primaryNotify = (msg: string) => {
    Notify.primary(msg)
  }
  const successNotify = (msg: string) => {
    Notify.success(msg)
  }
  const errorNotify = (msg: string) => {
    Notify.danger(msg)
  }
  const warningNotify = (msg: string) => {
    Notify.warn(msg)
  }
  const cusBgNotify = (msg: string) => {
    Notify.text(msg, {
      color: '#ad0000',
      background: '#ffe1e1',
      className: 'aa',
    })
  }
  const timeNotify = (msg: string) => {
    Notify.text(msg, { duration: 1000 })
  }
  const positionNotify = (msg: string) => {
    Notify.text(msg, { position: 'bottom' })
  }
  return (
    <>
      <div className="demo" style={{ paddingBottom: '30px' }}>
        <h2>{translated.basic}</h2>
        <Cell
          title={translated.basic}
          onClick={(event: React.MouseEvent) => {
            baseNotify(translated.basic)
          }}
        />
        <h2>{translated.t1}</h2>
        <CellGroup>
          <Cell
            title={translated.primaryNotify}
            onClick={(event: React.MouseEvent) => {
              primaryNotify(translated.primaryNotify)
            }}
          />
          <Cell
            title={translated.successNotify}
            onClick={(event: React.MouseEvent) => {
              successNotify(translated.successNotify)
            }}
          />
          <Cell
            title={translated.errorNotify}
            onClick={(event: React.MouseEvent) => {
              errorNotify(translated.errorNotify)
            }}
          />
          <Cell
            title={translated.warningNotify}
            onClick={(event: React.MouseEvent) => {
              warningNotify(translated.warningNotify)
            }}
          />
        </CellGroup>
        <h2>{translated.t2}</h2>
        <Cell
          title={translated.cusBgNotify}
          onClick={(event: React.MouseEvent) => {
            cusBgNotify(translated.cusBgNotify)
          }}
        />
        <h2>{translated.t3}</h2>
        <Cell
          title={translated.t3}
          onClick={(event: React.MouseEvent) => {
            timeNotify(translated.t3)
          }}
        />
        <Cell
          title={translated.cusPostion}
          onClick={(event: React.MouseEvent) => {
            positionNotify(translated.cusPostion)
          }}
        />
      </div>
    </>
  )
}

export default NotifyDemo
