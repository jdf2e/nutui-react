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
  headHeight: 40,
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
          rubberbandIfOutOfBounds(
            touch.deltaY.current,
            0,
            0,
            headHeight * 5,
            0.5
          ),
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
          {renderStatusText()}
        </div>
      </View>
      <div className={`${classPrefix}-content`}>{props.children}</div>
    </View>
  )
}

PullToRefresh.defaultProps = defaultProps
PullToRefresh.displayName = 'NutPullToRefresh'
