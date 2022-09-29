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

export type PullStatus = 'pulling' | 'canRelease' | 'refreshing' | 'complete'

export interface PullToRefreshProps {
  className: string
  style: React.CSSProperties
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
  children: React.ReactNode
}

const defaultProps = {
  className: '',
  style: {},
  pullingText: '',
  canReleaseText: '',
  refreshingText: '',
  completeText: '',
  completeDelay: 500,
  disabled: false,
  headHeight: 40,
  threshold: 60,
  onRefresh: () => {},
} as PullToRefreshProps
export const PullToRefresh: FunctionComponent<Partial<PullToRefreshProps>> = (
  p
) => {
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
      className={`nut-pulltorefresh ${props.className}`}
      style={props.style}
    >
      <animated.div style={springStyles} className="nut-pulltorefresh-head">
        <div
          className="nut-pulltorefresh-head-content"
          style={{ height: headHeight }}
        >
          {renderStatusText()}
        </div>
      </animated.div>
      <div className="nut-pulltorefresh-content">{props.children}</div>
    </animated.div>
  )
}

PullToRefresh.defaultProps = defaultProps
PullToRefresh.displayName = 'NutPullToRefresh'
