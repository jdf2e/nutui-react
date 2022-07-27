import React, { useState } from 'react'
import { Dialog } from './dialog'
import Cell from '../cell'

const DialogDemo = () => {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)

  return (
    <>
      <div className="demo">
        <h2>函数式调用</h2>
        <Cell
          title="基础弹框"
          onClick={() => {
            Dialog.alert({
              title: '基础弹框',
              content: '支持函数调用和组件调用两种方式。',
            })
          }}
        />
        <Cell
          title="无标题弹框"
          onClick={() => {
            Dialog.alert({
              content: '无标题弹框',
            })
          }}
        />
        <Cell
          title="提示弹框"
          onClick={() => {
            Dialog.alert({
              title: '温馨提示',
              content: '支持函数调用和组件调用两种方式。',
              noCancelBtn: true,
            })
          }}
        />
        <Cell
          title="底部按钮 垂直调用"
          onClick={() => {
            Dialog.alert({
              title: '温馨提示',
              content: '支持函数调用和组件调用两种方式。',
              footerDirection: 'vertical',
            })
          }}
        />
        <h2>组件调用</h2>
        <Cell title="基础弹框" onClick={() => setVisible1(true)} />
        <Dialog
          title="组件调用"
          visible={visible1}
          onOk={() => setVisible1(false)}
          onCancel={() => setVisible1(false)}
        >
          如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。
        </Dialog>
        <Cell title="底部按钮 垂直调用" onClick={() => setVisible2(true)} />
        <Dialog
          title="组件调用"
          visible={visible2}
          lockScroll
          footerDirection="vertical"
          onOk={() => setVisible2(false)}
          onCancel={() => setVisible2(false)}
        >
          如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。
        </Dialog>
      </div>
    </>
  )
}

export default DialogDemo
