import React, { FunctionComponent, ReactNode, useRef, useState } from 'react'
import classNames from 'classnames'
import { ITouchEvent, View } from '@tarojs/components'
import { Loading, More } from '@nutui/icons-react-taro'
import Taro from '@tarojs/taro'
import { useConfig } from '@/packages/configprovider/index.taro'
import { useTouch } from '@/utils/use-touch'
import { rubberbandIfOutOfBounds } from '@/utils/rubberband'
import { sleep } from '@/utils/sleep'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { PullToRefreshType } from './types'
import { getDeviceInfo } from '@/utils/get-system-info'

export type PullStatus = 'pulling' | 'canRelease' | 'refreshing' | 'complete'

export interface PullToRefreshProps extends BasicComponent {
  onRefresh: () => Promise<any>
  type: PullToRefreshType
  pullingText: ReactNode
  canReleaseText: ReactNode
  refreshingText: ReactNode
  completeText: ReactNode
  completeDelay: number
  headHeight: number
  threshold: number
  disabled: boolean
  scrollTop: number
  renderIcon: (status: PullStatus) => ReactNode
  renderText: (status: PullStatus) => ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
  type: 'default',
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

  const classes = classNames(
    classPrefix,
    props.className,
    `${classPrefix}-${props.type}`
  )
  const headHeight = props.headHeight
  const threshold = props.threshold
  const pullingRef = useRef(false)
  const [status, setStatus] = useState<PullStatus>('pulling')
  const [height, setHeight] = useState(0)

  const renderIcons = (status: string) => {
    return (
      <>
        {(status === 'pulling' || status === 'complete') && <Loading />}
        {(status === 'canRelease' || status === 'refreshing') && <More />}
      </>
    )
  }
  const renderStatusIcon = () => {
    if (props.renderIcon) {
      return props.renderIcon?.(status)
    }
    return renderIcons(status)
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
    if (props.disabled) return
    touch.start(e as any)
  }
  const handleTouchMove: any = (e: ITouchEvent) => {
    if (props.scrollTop > 0 || props.disabled) {
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
    if (props.disabled) return
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
  // 安卓微信小程序onTouchMove回调次数少导致下拉卡顿，增加动效会更顺畅
  const isAndroidWeApp =
    getDeviceInfo().platform === 'android' && Taro.getEnv() === 'WEAPP'
  const springStyles = {
    height: `${height}px`,
    ...(!pullingRef.current || isAndroidWeApp
      ? { transition: 'height .3s ease' }
      : {}),
  }
  return (
    <View
      className={classes}
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
          <div>{renderStatusIcon()}</div>
          <div>{renderStatusText()}</div>
        </div>
      </View>
      <div className={`${classPrefix}-content`}>{props.children}</div>
    </View>
  )
}

PullToRefresh.displayName = 'NutPullToRefresh'
