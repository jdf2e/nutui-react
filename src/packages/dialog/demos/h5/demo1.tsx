import React, { useEffect, useRef } from 'react'
import { Cell, Dialog, Image } from '@nutui/nutui-react'

const Demo1 = () => {
  const timersRef = useRef<{ t1?: any; t2?: any }>({})
  const activeDialogRef = useRef<any>(null)

  const applyPosture = (targetPosture: 'flat' | 'folded') => {
    document.documentElement.setAttribute('data-posture', targetPosture)
    window.dispatchEvent(
      new CustomEvent('nutui-posture-change', {
        detail: { posture: targetPosture },
      })
    )
    if (activeDialogRef.current) {
      activeDialogRef.current.update({
        segment: targetPosture === 'folded' ? 'left' : 'center',
      })
    }
  }

  useEffect(() => {
    const handleSync = (e: any) => {
      const p = e.detail?.posture
      if (activeDialogRef.current && (p === 'flat' || p === 'folded')) {
        activeDialogRef.current.update({
          segment: p === 'folded' ? 'left' : 'center',
        })
      }
    }
    window.addEventListener('nutui-posture-change', handleSync)
    return () => window.removeEventListener('nutui-posture-change', handleSync)
  }, [])

  const showAdaptiveDialog = () => {
    clearTimeout(timersRef.current.t1)
    clearTimeout(timersRef.current.t2)

    const isFolded =
      document.documentElement.getAttribute('data-posture') === 'folded'

    const dialog = Dialog.confirm({
      className: 'dialog-adaptive',
      title: '基础弹框 (自适应折叠屏)',
      segment: isFolded ? 'left' : 'center',
      content: (
        <div style={{ textAlign: 'left', fontSize: '13px', lineHeight: '1.6' }}>
          <p style={{ margin: '0 0 10px 0', color: '#666' }}>
            支持函数和组件调用。在横屏展开平整时居中展示；折叠微弯时平滑滑动至左屏，避让铰链折痕；展平时自动滑回居中。
          </p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
            <button
              type="button"
              style={{
                flex: 1,
                padding: '7px 0',
                fontSize: '12px',
                border: '1px solid #fa3725',
                borderRadius: '6px',
                background: '#fff',
                color: '#fa3725',
                cursor: 'pointer',
                fontWeight: 500,
              }}
              onClick={() => {
                applyPosture('folded')
              }}
            >
              模拟微弯 (滑至左屏)
            </button>
            <button
              type="button"
              style={{
                flex: 1,
                padding: '7px 0',
                fontSize: '12px',
                border: '1px solid #dcdcdc',
                borderRadius: '6px',
                background: '#fff',
                color: '#333',
                cursor: 'pointer',
                fontWeight: 500,
              }}
              onClick={() => {
                applyPosture('flat')
              }}
            >
              模拟展平 (回到中间)
            </button>
          </div>
          <button
            type="button"
            style={{
              width: '100%',
              marginTop: '8px',
              padding: '7px 0',
              fontSize: '12px',
              border: 'none',
              borderRadius: '6px',
              background: 'rgba(250, 55, 37, 0.1)',
              color: '#fa3725',
              cursor: 'pointer',
              fontWeight: 600,
            }}
            onClick={() => {
              // 自动演练流程：先回到平整居中 -> 滑向左屏 -> 再滑回居中
              applyPosture('flat')
              clearTimeout(timersRef.current.t1)
              clearTimeout(timersRef.current.t2)
              timersRef.current.t1 = setTimeout(() => {
                applyPosture('folded')
                timersRef.current.t2 = setTimeout(() => {
                  applyPosture('flat')
                }, 1800)
              }, 600)
            }}
          >
            ▶ 自动演练 (居中 → 滑至左屏 → 回到中间)
          </button>
        </div>
      ),
      confirmText: '我知道了',
      hideCancelButton: true,
      onClose: () => {
        clearTimeout(timersRef.current.t1)
        clearTimeout(timersRef.current.t2)
        activeDialogRef.current = null
      },
    })

    activeDialogRef.current = dialog
  }

  return (
    <>
      <Cell
        title="基础弹框 (自适应折叠屏)"
        description="横屏居中 / 微弯靠左 / 展平回中"
        onClick={showAdaptiveDialog}
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
              title: '更新标题',
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
