import React from 'react'
import Notify from './notify'
import Cell from '@/packages/cell'
import CellGroup from '@/packages/cellgroup'
import Button from '@/packages/button'

const NotifyDemo = () => {
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
    Notify.text(msg, { color: '#ad0000', background: '#ffe1e1', className: 'aa' })
  }
  const timeNotify = (msg: string) => {
    Notify.text(msg, { duration: 10000 })
  }
  return (
    <>
      <div className="demo" style={{ paddingBottom: '30px' }}>
        <h2>基础用法</h2>
        <Cell
          title="基础用法"
          isLink={true}
          click={(event: React.MouseEvent) => {
            baseNotify('基础用法')
          }}
        ></Cell>
        <h2>通知类</h2>
        <CellGroup>
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
        </CellGroup>
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
          title="自定义时长10s"
          isLink={true}
          click={(event: React.MouseEvent) => {
            timeNotify('自定义时长10s')
          }}
        ></Cell>

        <Button
          type="primary"
          onClick={() => {
            Notify.hide()
          }}
        >
          点我关闭通告栏
        </Button>
      </div>
    </>
  )
}

export default NotifyDemo
