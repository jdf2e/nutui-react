import React from 'react'
import { Dialog } from './dialog'
import { destroyList, BaseDialog, DialogReturnProps } from '@/types'
import { render as reactRender, unmount } from '@/utils/render'

type DialogConfirmNativeProps = Partial<BaseDialog>
function ConfirmDialog(props: DialogConfirmNativeProps) {
  return <Dialog {...props}>{props.content}</Dialog>
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
