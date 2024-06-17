import React, { useState, useMemo } from 'react'
import classNames from 'classnames'
import { ITouchEvent, View, BaseEventOrig } from '@tarojs/components'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { harmony, harmonyAndRn } from '@/utils/platform-taro'

export interface HoverButtonItemProps extends BasicComponent {
  icon?: React.ReactNode
  onClick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent
  ) => void
}

const defaultProps = {
  ...ComponentDefaults,
  icon: null,
  onClick: (
    value: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent
  ) => {},
} as HoverButtonItemProps

const classPrefix = 'nut-hoverbutton-item'
const isHarmony = harmony()
const isNative = harmonyAndRn()

export const HoverButtonItem = (props: Partial<HoverButtonItemProps>) => {
  const { className, style, icon, onClick } = {
    ...defaultProps,
    ...props,
  } as any
  const [isTouchStart, setTouchStart] = useState(false)
  // @TODO 待添加暗黑模式及样式变量功能
  const nativeProps = useMemo(
    () => (isNative ? { color: isTouchStart ? '#595959' : '#1A1A1A' } : {}),
    [isTouchStart]
  )

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent
  ) => {
    onClick && onClick(event)
  }

  const handleActiveStart = (event: BaseEventOrig) => {
    isNative && setTouchStart(true)
  }

  const handleActiveEnd = (event: BaseEventOrig) => {
    isNative && setTouchStart(false)
  }

  return (
    <View
      className={classNames([`${classPrefix}-container`, className], {
        [`${classPrefix}-container-active`]: isNative && isTouchStart,
        [`${classPrefix}-container-harmony`]: isHarmony,
      })}
      style={style}
      onTouchStart={handleActiveStart}
      onTouchEnd={handleActiveEnd}
      onTouchCancel={handleActiveEnd}
      onClick={handleClick}
    >
      <View className={`${classPrefix}-icon`}>
        {React.cloneElement(icon, {
          className: 'nut-icon',
          size: 20,
          ...nativeProps,
        })}
      </View>
    </View>
  )
}

HoverButtonItem.displayName = 'NutHoverButtonItem'
