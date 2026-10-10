import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { useDrag } from '@use-gesture/react'
import { animated, useSpring } from '@react-spring/web'
import { useConfig } from '@/packages/configprovider'
import { getScrollParent } from '@/utils/get-scroll-parent'
import { rubberbandIfOutOfBounds } from '@/utils/rubberband'
import { passiveSupported } from '@/utils/supports-passive'
import { ComponentDefaults } from '@/utils/typings'
import { PullStatus, WebPullToRefreshProps } from '@/types'
import {
  PULL_TO_REFRESH_DEFAULT_ICON,
  PULL_TO_REFRESH_PRIMARY_ICON,
} from './images'

const defaultProps = {
  ...ComponentDefaults,
  type: 'default',
  pullingText: '',
  canReleaseText: '',
  refreshingText: '',
  disabled: false,
  headHeight: 80,
  threshold: 60,
  onRefresh: () => {},
} as WebPullToRefreshProps
export const PullToRefresh: FunctionComponent<
  Partial<WebPullToRefreshProps>
> = (p) => {
  const classPrefix = 'nut-pulltorefresh'
  const { locale } = useConfig()
  const props: WebPullToRefreshProps = {
    ...defaultProps,
    ...p,
    ...{
      pullingText: p.pullingText || locale.pullToRefresh.pullingText,
      canReleaseText: p.canReleaseText || locale.pullToRefresh.canReleaseText,
      refreshingText: p.refreshingText || locale.pullToRefresh.refreshingText,
    },
  }

  const classes = classNames(
    classPrefix,
    props.className,
    `${classPrefix}-${props.type}`
  )

  const headHeight = props.headHeight
  const threshold = props.threshold
  const [status, setStatus] = useState<PullStatus>('pulling')
  const [springStyles, api] = useSpring(() => ({
    from: { height: 0 },
    config: {
      tension: 300,
      friction: 30,
      clamp: true,
    },
  }))

  const elementRef = useRef<HTMLDivElement>(null)
  const pullingRef = useRef(false)

  useEffect(() => {
    elementRef.current?.addEventListener('touchmove', () => {})
  }, [])

  const collapse = () =>
    api.start({
      to: async (next) => {
        await next({ height: 0 })
        setStatus('pulling')
      },
    })

  async function doRefresh() {
    api.start({ height: headHeight })
    setStatus('refreshing')
    try {
      await props.onRefresh()
    } catch (e) {
      collapse()
      throw e
    }
    // 加载完成后无需展示完成态，直接收起
    collapse()
  }

  useDrag(
    (state) => {
      if (status === 'refreshing') return
      const { event } = state

      // 最后一个事件，检查是否可以刷新或是否是开始状态（第一个状态也是最后一个状态）
      if (state.last) {
        pullingRef.current = false
        if (status === 'canRelease') {
          doRefresh()
        } else {
          api.start({ height: 0 })
        }
        return
      }

      function getScrollTop(element: Window | Element) {
        return 'scrollTop' in element ? element.scrollTop : element.scrollY
      }

      // 手指位置
      const [, y] = state.movement
      // 第一个事件，并且手指位置大于0
      if (state.first && y > 0) {
        const target = state.event.target
        if (!target || !(target instanceof Element)) return
        let scrollParent = getScrollParent(target)
        while (true) {
          if (!scrollParent) return
          const scrollTop = getScrollTop(scrollParent)
          if (scrollTop > 0) {
            return
          }
          // 查找到 window 说明到顶了
          if (scrollParent instanceof Window) {
            break
          }
          // 递归查找
          scrollParent = getScrollParent(scrollParent.parentNode as Element)
        }
        pullingRef.current = true
      }

      if (!pullingRef.current) return
      if (event.cancelable) {
        event.preventDefault()
      }
      event.stopPropagation()
      const height = Math.max(
        rubberbandIfOutOfBounds(y, 0, 0, headHeight * 5, 0.5),
        0
      )
      api.start({ height })
      setStatus(height > threshold ? 'canRelease' : 'pulling')
    },
    {
      pointer: { touch: true },
      axis: 'y',
      target: elementRef,
      enabled: !props.disabled,
      eventOptions: (passiveSupported
        ? { passive: false }
        : false) as AddEventListenerOptions,
    }
  )

  // 内置图标：默认态与反白态各一套，使用方可通过 renderIcon 完全接管。
  // 两条分支都直接落在 .nut-pulltorefresh-status-icon 内，尺寸由该容器的样式统一约束。
  const renderStatusIcon = () => {
    if (props.renderIcon) {
      return props.renderIcon?.(status)
    }
    const icon =
      props.type === 'primary'
        ? PULL_TO_REFRESH_PRIMARY_ICON
        : PULL_TO_REFRESH_DEFAULT_ICON
    return (
      <i className={`${classPrefix}-head-content-icons`}>
        <img alt="" src={icon} />
      </i>
    )
  }

  const renderStatusText = () => {
    if (props.renderText) {
      return props.renderText?.(status)
    }
    if (status === 'pulling') return props.pullingText
    if (status === 'canRelease') return props.canReleaseText
    if (status === 'refreshing') return props.refreshingText
    return ''
  }

  return (
    <animated.div ref={elementRef} className={classes} style={props.style}>
      <animated.div
        style={springStyles}
        className={classNames({
          [`${classPrefix}-head`]: true,
          [`${classPrefix}-primary-head`]: props.type === 'primary',
        })}
      >
        <div
          className={classNames({
            [`${classPrefix}-head-content`]: true,
            [`${classPrefix}-primary-head-content`]: props.type === 'primary',
          })}
          style={{ height: headHeight }}
        >
          <div
            className={classNames({
              [`${classPrefix}-status-icon`]: true,
              [`${classPrefix}-primary-status-icon`]: props.type === 'primary',
            })}
          >
            {renderStatusIcon()}
          </div>
          <div
            className={classNames({
              [`${classPrefix}-status-text`]: true,
              [`${classPrefix}-primary-status-text`]: props.type === 'primary',
            })}
          >
            {renderStatusText()}
          </div>
        </div>
      </animated.div>
      <div
        className={classNames({
          [`${classPrefix}-content`]: true,
          [`${classPrefix}-primary-content}`]: props.type === 'primary',
        })}
      >
        {props.children}
      </div>
    </animated.div>
  )
}

PullToRefresh.displayName = 'NutPullToRefresh'
