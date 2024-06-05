import React from 'react'
import classNames from 'classnames'
import { ITouchEvent, View } from '@tarojs/components'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

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

export const HoverButtonItem = (props: Partial<HoverButtonItemProps>) => {
  const { className, style, icon, onClick } = {
    ...defaultProps,
    ...props,
  } as any

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent
  ) => {
    onClick && onClick(event)
  }

  return (
    <View
      className={classNames([`${classPrefix}-container`, className])}
      style={style}
      onClick={handleClick}
    >
      <View className={`${classPrefix}-icon`}>{icon}</View>
    </View>
  )
}

HoverButtonItem.displayName = 'NutHoverButtonItem'
