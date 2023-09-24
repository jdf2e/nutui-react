import React, {
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useDrag } from '@use-gesture/react'
import { animated, useSpring } from '@react-spring/web'
import { useConfig } from '@/packages/configprovider'
import { getScrollParent } from '@/utils/get-scroll-parent'
import { rubberbandIfOutOfBounds } from '@/utils/rubberband'
import { sleep } from '@/utils/sleep'
import { passiveSupported } from '@/utils/supports-passive'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export type PullStatus = 'pulling' | 'canRelease' | 'refreshing' | 'complete'

export interface PullToRefreshProps extends BasicComponent {
  onRefresh: () => Promise<any>
  pullingText: ReactNode
  canReleaseText: ReactNode
  refreshingText: ReactNode
  completeText: ReactNode
  completeDelay: number
  headHeight: number
  threshold: number
  disabled: boolean
  renderText: (status: PullStatus) => ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
  pullingText: '',
  canReleaseText: '',
  refreshingText: '',
  completeText: '',
  completeDelay: 500,
  disabled: false,
  headHeight: 50,
  threshold: 60,
  onRefresh: () => {},
} as PullToRefreshProps
export const PullToRefresh: FunctionComponent<Partial<PullToRefreshProps>> = (
  p
) => {
  const classPrefix = 'nut-pulltorefresh'
  const { locale } = useConfig()
  const props: PullToRefreshProps = {
    ...defaultProps,
    ...p,
    ...{
      pullingText: p.pullingText || locale.pullToRefresh.pullingText,
      canReleaseText: p.canReleaseText || locale.pullToRefresh.canReleaseText,
      refreshingText: p.refreshingText || locale.pullToRefresh.refreshingText,
      completeText: p.completeText || locale.pullToRefresh.completeText,
    },
  }

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

  async function doRefresh() {
    api.start({ height: headHeight })
    setStatus('refreshing')
    try {
      await props.onRefresh()
      setStatus('complete')
    } catch (e) {
      api.start({
        to: async (next) => {
          await next({ height: 0 })
          setStatus('pulling')
        },
      })

      throw e
    }
    if (props.completeDelay > 0) {
      await sleep(props.completeDelay)
    }
    api.start({
      to: async (next) => {
        await next({ height: 0 })
        setStatus('pulling')
      },
    })
  }

  useDrag(
    (state) => {
      if (status === 'refreshing' || status === 'complete') return
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

  const renderIcons = () => {
    return (
      <>
        <i className={`${classPrefix}-head-content-icons`}>
          {(status === 'pulling' || status === 'complete') && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="26"
              viewBox="0 0 36 26"
              fill="none"
            >
              <path
                d="M34.7243 10.965C32.842 8.94809 32.4297 5.92727 31.2018 4.90525C29.9738 3.88324 28.1722 5.51123 27.5089 6.46993C23.8429 3.88324 17.9809 4.00082 17.9809 4.00082C17.9809 4.00082 12.1458 3.88324 8.47083 6.46993C7.80754 5.51123 6.01488 3.88324 4.78691 4.90525C3.55894 5.92727 3.15559 8.94809 1.2733 10.965C-0.133943 12.4844 -0.250465 12.9276 0.323186 14.1305C0.887874 15.3334 4.40149 16.3283 6.88432 13.9496C7.21596 15.1887 10.0125 21.9991 17.9899 21.9991C25.9672 21.9991 28.7817 15.1887 29.1043 13.9496C31.5872 16.3283 35.1098 15.3334 35.6834 14.1305C36.2481 12.9276 36.1316 12.4844 34.7243 10.965Z"
                fill="#8C8C8C"
              />
            </svg>
          )}
          {(status === 'canRelease' || status === 'refreshing') && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="26"
              viewBox="0 0 36 26"
              fill="none"
            >
              <circle cx="33" cy="13" r="3" fill="#8C8C8C" />
              <circle cx="18" cy="13" r="3" fill="#8C8C8C" />
              <circle cx="3" cy="13" r="3" fill="#8C8C8C" />
            </svg>
          )}
        </i>
      </>
    )
  }

  const renderStatusText = () => {
    if (props.renderText) {
      return props.renderText?.(status)
    }
    if (status === 'pulling') return props.pullingText
    if (status === 'canRelease') return props.canReleaseText
    if (status === 'refreshing') return props.refreshingText
    if (status === 'complete') return props.completeText
    return ''
  }

  return (
    <animated.div
      ref={elementRef}
      className={`${classPrefix} ${props.className}`}
      style={props.style}
    >
      <animated.div style={springStyles} className={`${classPrefix}-head`}>
        <div
          className={`${classPrefix}-head-content`}
          style={{ height: headHeight }}
        >
          {renderIcons()}
          <div>{renderStatusText()}</div>
        </div>
      </animated.div>
      <div className={`${classPrefix}-content`}>{props.children}</div>
    </animated.div>
  )
}

PullToRefresh.defaultProps = defaultProps
PullToRefresh.displayName = 'NutPullToRefresh'
