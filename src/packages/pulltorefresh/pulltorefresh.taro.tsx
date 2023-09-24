import React, { FunctionComponent, ReactNode, useRef, useState } from 'react'
import { ITouchEvent, View } from '@tarojs/components'
import { useConfig } from '@/packages/configprovider/index.taro'
import { useTouch } from '@/utils/use-touch'
import { rubberbandIfOutOfBounds } from '@/utils/rubberband'
import { sleep } from '@/utils/sleep'
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
  scrollTop: number
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
  scrollTop: 0,
  onRefresh: () => {},
} as PullToRefreshProps
export const PullToRefresh: FunctionComponent<Partial<PullToRefreshProps>> = (
  p
) => {
  const classPrefix = 'nut-pulltorefresh'
  const { locale } = useConfig()
  const touch = useTouch()
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
  const pullingRef = useRef(false)
  const [status, setStatus] = useState<PullStatus>('pulling')
  const [height, setHeight] = useState(0)

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

  const handleTouchStart: any = (e: ITouchEvent) => {
    touch.start(e as any)
  }
  const handleTouchMove: any = (e: ITouchEvent) => {
    if (props.scrollTop > 0) {
      return
    }
    if (status === 'refreshing' || status === 'complete') return
    // touch 的封装不好，比如在使用高度控制的时候，就很迷
    touch.move(e as any)
    if (touch.isVertical()) {
      pullingRef.current = true
      setHeight(
        Math.max(
          rubberbandIfOutOfBounds(touch.deltaY, 0, 0, headHeight * 5, 0.5),
          0
        )
      )
      setStatus(height > threshold ? 'canRelease' : 'pulling')
    }
  }

  async function doRefresh() {
    setHeight(headHeight)
    setStatus('refreshing')
    try {
      await props.onRefresh()
      setStatus('complete')
    } catch (e) {
      setHeight(0)
      setStatus('pulling')
      throw e
    }
    if (props.completeDelay > 0) {
      await sleep(props.completeDelay)
    }
    setHeight(0)
    setStatus('pulling')
  }

  const handleTouchEnd: any = () => {
    pullingRef.current = false
    if (status === 'canRelease') {
      doRefresh()
    } else {
      // 时序问题，可能会先setStatus再修改heightRef，导致下拉不到位后组件不会自动回弹
      setHeight(0)
      // heightRef.current = 0
      setStatus('pulling')
    }
  }
  const springStyles = {
    height: `${height}px`,
    ...(!pullingRef.current ? { transition: 'height .3s ease' } : {}),
  }
  return (
    <View
      className={`${classPrefix} ${props.className}`}
      style={props.style}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <View style={springStyles} className={`${classPrefix}-head`}>
        <div
          className={`${classPrefix}-head-content`}
          style={{ height: headHeight }}
        >
          {renderIcons()}
          <div>{renderStatusText()}</div>
        </div>
      </View>
      <div className={`${classPrefix}-content`}>{props.children}</div>
    </View>
  )
}

PullToRefresh.defaultProps = defaultProps
PullToRefresh.displayName = 'NutPullToRefresh'
