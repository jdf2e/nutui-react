import React from 'react'
import ReactDOM from 'react-dom'
import { Dialog } from './dialog'
import { destroyList, ConfirmProps } from './config'
import { render as reactRender } from '@/utils/render'

function ConfirmDialog(props: ConfirmProps) {
  return <Dialog {...props}>{props.content}</Dialog>
}

// 如果是消息提示型弹出框，那么只有确认按钮
export const normalizeConfig = (_config: ConfirmProps): ConfirmProps => {
  if (_config.isNotice) {
    let { icon } = _config
    if (!icon && icon !== null) {
      switch (_config.noticeType) {
        case 'alert':
          icon = ''
          break
        default:
          break
      }
    }
    _config.noCancelBtn = true
  }
  return _config
}

function confirm(
  config: ConfirmProps,
  renderFunc?: (props: ConfirmProps) => void
) {
  const div = document.createElement('div')
  document.body.appendChild(div)

  function render(props: ConfirmProps) {
    reactRender(<ConfirmDialog {...props} onCancel={onCancel} />, div)
  }

  const renderFunction = renderFunc || render

  let dialogConfig: ConfirmProps = {
    ...config,
    visible: false,
  }
  const onOk = () => {
    let ret
    const _onOk = config.onOk || config.onConfirm
    if (_onOk) {
      ret = _onOk()
    }
    if (ret && ret.then) {
      renderFunction(dialogConfig)
      ret.then(
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
  dialogConfig.onOk = onOk
  dialogConfig = normalizeConfig(dialogConfig)

  dialogConfig.visible = true
  renderFunction(dialogConfig)

  function destroy() {
    const unmountEle = ReactDOM.unmountComponentAtNode(div)
    if (unmountEle && div.parentNode) {
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

  function onCancel(isOnOk?: boolean) {
    !isOnOk && config.onCancel && config.onCancel()
    dialogConfig.visible = false
    dialogConfig.onClosed = () => {
      config.onClosed && config.onClosed()
      destroy()
    }
    renderFunction(dialogConfig)
  }

  function update(newConfig: ConfirmProps) {
    dialogConfig = {
      ...dialogConfig,
      title: config.title, // 避免 newConfig 未传递 title 时，icon 出现多个的问题
      ...newConfig,
    }

    dialogConfig = normalizeConfig(dialogConfig)
    renderFunction(dialogConfig)
  }

  function close() {
    dialogConfig.visible = false
    dialogConfig.onClosed = () => {
      config.onClosed && config.onClosed()
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
