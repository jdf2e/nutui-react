import React from 'react'
import { Dialog } from './dialog'
import { destroyList, DialogConfirmProps, DialogReturnProps } from './config'
import { render as reactRender, unmount } from '@/utils/render'

function ConfirmDialog(props: DialogConfirmProps) {
  return <Dialog {...props}>{props.content}</Dialog>
}

// 如果是消息提示型弹出框，那么只有确认按钮
export const normalizeConfig = (
  config: DialogConfirmProps
): DialogConfirmProps => {
  if (config.isNotice) {
    let { icon } = config
    if (!icon && icon !== null) {
      switch (config.noticeType) {
        case 'alert':
          icon = ''
          break
        default:
          break
      }
    }
    config.hideCancelButton = true
  }
  return config
}

const confirm = (
  config: DialogConfirmProps,
  renderFunc?: (props: DialogConfirmProps) => void
): DialogReturnProps => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  let dialogConfig: DialogConfirmProps = {
    ...config,
    visible: false,
  }

  const render = (props: DialogConfirmProps, callback?: () => any) => {
    reactRender(<ConfirmDialog {...props} onCancel={() => onCancel()} />, div)
    callback && callback()
  }

  const renderFunction = renderFunc || render

  const onConfirm = () => {
    const _onConfirm = config.onConfirm || config.onConfirm
    const ret = _onConfirm?.()
    if (ret && ret.then) {
      renderFunction(dialogConfig)
      return ret.then(
        () => {
          onCancel(true)
        },
        (e: Error) => {
          console.error(e)
          renderFunction(dialogConfig)
        }
      )
    }
    if (!ret) {
      onCancel(true)
    }
  }

  // 如果是promise，那么处理loading和加载完成关闭
  dialogConfig.onConfirm = onConfirm
  dialogConfig = normalizeConfig(dialogConfig)
  dialogConfig.visible = true
  renderFunction(dialogConfig)

  const destroy = () => {
    unmount(div)
    if (div?.parentNode) {
      div.parentNode.removeChild(div)
    }
    for (let i = 0; i < destroyList.length; i++) {
      const fn = destroyList[i]
      if (fn === close) {
        destroyList.splice(i, 1)
        break
      }
    }
  }

  const onCancel = (confirm?: boolean) => {
    !confirm && config.onCancel && config.onCancel()
    dialogConfig.visible = false
    dialogConfig.onClose = () => {
      config.onClose && config.onClose()
    }
    renderFunction(dialogConfig, () => {
      destroy()
    })
  }

  const update = (newConfig: DialogConfirmProps) => {
    dialogConfig = {
      ...dialogConfig,
      title: config.title, // 避免 newConfig 未传递 title 时，icon 出现多个的问题
      ...newConfig,
    }

    dialogConfig = normalizeConfig(dialogConfig)
    renderFunction(dialogConfig)
  }

  const close = () => {
    dialogConfig.visible = false
    dialogConfig.onClose = () => {
      config.onClose && config.onClose()
      destroy()
    }
    renderFunction(dialogConfig)
  }

  destroyList.push(close)

  return {
    close,
    update,
  }
}

export default confirm
