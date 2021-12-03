import React from 'react'
import { Notify } from './notify'
import { Cell } from '../cell/cell'

const NotifyDemo = () => {
  const textNotify = (msg: string) => {
    // Notify.text(msg)
  }
  // const successNotify = (msg: string) => {
  //   Notify.success(msg)
  // }
  // const errorNotify = (msg: string) => {
  //   Notify.fail(msg)
  // }
  // const warningNotify = (msg: string) => {
  //   Notify.warn(msg)
  // }
  // const loadingNotify = (msg: string) => {
  //   Notify.loading(msg)
  // }
  // const duringNotify = (msg: string) => {
  //   Notify.text(msg, { duration: 10 })
  // }
  // const iconNotify = (msg: string) => {
  //   Notify.customIcon(msg, {
  //     duration: 0, //duration为0则一直展示
  //     icon: 'JD',
  //     id: '',
  //     center: true, // toast是否居中展示
  //     type: 'text',
  //     customClass: '', // 自定义样式名
  //     bottom: 30, // toast不居中时距离底部位置
  //     size: 'base', // 设置字体大小，默认base,可选large\small\base
  //     textAlignCenter: true, // 文字是否居中显示,true为居中，false为left
  //     bgColor: 'rgba(0, 0, 0, .8)',
  //     cover: true, //是否展示透明遮罩层
  //     coverColor: 'rgba(0, 0, 0, 0.4)', // 遮罩颜色设定
  //     closeOnClickOverlay: true, // 点击遮罩可关闭
  //     onClose: () => {
  //       console.log('closeToast')
  //     },
  //   })
  // }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell
          title="Text文字提示"
          isLink={true}
          click={(event: React.MouseEvent) => textNotify('网络失败，请稍后再试~')}
        >
          <Notify msg={'test'}></Notify>
        </Cell>
      </div>
    </>
  )
}

export default NotifyDemo
