import React from 'react'
import Notify from './notify'
import { Cell } from '../cell/cell'

const NotifyDemo = () => {
  const baseNotify = (msg: string) => {
    Notify.text(msg)
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
    Notify.text(msg, { color: '#ad0000', background: '#ffe1e1' })
  }
  const timeNotify = (msg: string) => {
    Notify.text(msg, { duration: 10000 })
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell
          title="基础用法"
          isLink={true}
          click={(event: React.MouseEvent) => {
            baseNotify('基础用法')
          }}
        ></Cell>
        <h2>通知类</h2>
        <Cell
          title="主要通知"
          isLink={true}
          click={(event: React.MouseEvent) => {
            primaryNotify('主要通知')
          }}
        ></Cell>
        <Cell
          title="成功通知"
          isLink={true}
          click={(event: React.MouseEvent) => {
            successNotify('成功通知')
          }}
        ></Cell>
        <Cell
          title="危险通知"
          isLink={true}
          click={(event: React.MouseEvent) => {
            errorNotify('危险通知')
          }}
        ></Cell>
        <Cell
          title="警告通知"
          isLink={true}
          click={(event: React.MouseEvent) => {
            warningNotify('警告通知')
          }}
        ></Cell>
        <h2>自定义背景色和字体颜色</h2>
        <Cell
          title="自定义背景色和字体颜色"
          isLink={true}
          click={(event: React.MouseEvent) => {
            cusBgNotify('自定义背景色和字体颜色')
          }}
        ></Cell>
        <h2>自定义时长</h2>
        <Cell
          title="自定义时长"
          isLink={true}
          click={(event: React.MouseEvent) => {
            timeNotify('自定义时长')
          }}
        ></Cell>
      </div>
    </>
  )
}

export default NotifyDemo
