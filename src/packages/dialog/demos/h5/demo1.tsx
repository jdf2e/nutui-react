import React from 'react'
import { Cell, Dialog, Image } from '@nutui/nutui-react'

const Demo1 = () => {
  return (
    <>
      <Cell
        title="基础弹框"
        onClick={() => {
          Dialog.alert({
            className: 'dialog-func',
            title: '基础弹框',
            content: '支持函数调用和组件调用两种方式。',
          })
        }}
      />
      <Cell
        title="提示弹框"
        onClick={() => {
          Dialog.alert({
            title: '提示',
            content: '支持函数调用和组件调用两种方式。',
            hideCancelButton: true,
            confirmText: '确认',
          })
        }}
      />
      <Cell
        title="无标题弹框、不锁背景滚动"
        onClick={() => {
          Dialog.alert({
            content: '无标题弹框',
            confirmText: '确认',
            cancelText: '取消',
            lockScroll: false,
          })
        }}
      />
      <Cell
        title="底部按钮 垂直布局 使用"
        onClick={() => {
          Dialog.alert({
            title: '提示',
            content: '支持函数调用和组件调用两种方式。',
            footerDirection: 'vertical',
            confirmText: '确认',
            cancelText: '取消',
          })
        }}
      />
      <Cell
        title="打开弹框 3s 后调用关闭方法"
        onClick={() => {
          const dialog = Dialog.confirm({
            content: '打开弹框 3s 后调用关闭方法',
            confirmText: '确认',
            cancelText: '取消',
          })
          setTimeout(() => {
            dialog.close()
          }, 3000)
        }}
      />
      <Cell
        title="打开弹框 3s 后更新弹框内容"
        onClick={() => {
          const dialog = Dialog.confirm({
            content: '打开弹框 3s 后更新弹框内容',
          })
          setTimeout(() => {
            dialog.update({
              content: '打开弹框 3s 后更新弹框内容 我是更新',
            })
          }, 3000)
        }}
      />
      <Cell
        title="点击取消时，拦截"
        onClick={() => {
          Dialog.alert({
            title: '点击取消时，拦截',
            content: '支持函数调用和组件调用两种方式',
            closeOnOverlayClick: false,
            beforeCancel: () => {
              console.log('stop close')
              return false
            },
          })
        }}
      />
      <Cell
        title="顶部带插图"
        onClick={() => {
          Dialog.alert({
            className: 'dialog-func',
            header: (
              <Image src="https://img13.360buyimg.com/imagetools/jfs/t1/219330/27/30033/11784/6544af3fF5c0fd98f/64c41bb05ef09189.png" />
            ),
            title: '顶部带插图',
            content: '支持函数调用和组件调用两种方式',
          })
        }}
      />
    </>
  )
}
export default Demo1
