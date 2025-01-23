import React from 'react'
import { Dialog } from './dialog'
import { destroyList, DialogConfirmProps, DialogReturnProps } from './types'
import { render as reactRender, unmount } from '@/utils/render'

type DialogConfirmNativeProps = Partial<DialogConfirmProps>
function ConfirmDialog(props: DialogConfirmNativeProps) {
  return <Dialog {...props}>{props.content}</Dialog>
}

// 如果是消息提示型弹出框，那么只有确认按钮
export const normalizeConfig = (
  config: DialogConfirmNativeProps
): DialogConfirmNativeProps => {
  config.hideCancelButton = config.isNotice
  return config
}

const confirm = (
  config: DialogConfirmNativeProps,
  renderFunc?: (props: DialogConfirmNativeProps) => void
): DialogReturnProps => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  let dialogConfig: DialogConfirmNativeProps = {
    ...config,
    visible: false,
  }

  const render = (props: DialogConfirmNativeProps, callback?: () => any) => {
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

  const update = (newConfig: DialogConfirmNativeProps) => {
    dialogConfig = {
      ...dialogConfig,
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
