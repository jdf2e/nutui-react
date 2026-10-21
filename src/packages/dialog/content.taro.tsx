import React, { FunctionComponent, HTMLAttributes } from 'react'
import classNames from 'classnames'
import { View, ITouchEvent } from '@tarojs/components'
import { TaroContentProps } from '@/types'

export const defaultContentProps = {
  visible: false,
  title: '',
  header: '',
  footer: '',
  close: '',
  footerDirection: 'horizontal',
  onClick: () => {},
  segment: 'center' as const,
  microBent: false,
}

export const Content: FunctionComponent<
  Partial<TaroContentProps> &
    Omit<HTMLAttributes<HTMLDivElement>, 'onClick' | 'title'>
> = (props) => {
  const {
    visible,
    title,
    header,
    footer,
    close,
    footerDirection,
    children,
    style,
    className,
    onClick,
    segment,
    microBent,
  } = { ...defaultContentProps, ...props }

  const classPrefix = 'nut-dialog'

  const renderHeader = () => {
    return title && <View className={`${classPrefix}-header`}>{title}</View>
  }

  const renderFooter = () => {
    return (
      footer && (
        <View
          className={classNames(`${classPrefix}-footer`, {
            [footerDirection]: footerDirection,
          })}
        >
          {footer}
        </View>
      )
    )
  }

  const handleClick = (e: ITouchEvent) => {
    onClick(e)
  }

  const isMicroBent = microBent || segment === 'left'

  return (
    <View
      className={classNames(
        `${classPrefix}-outer`,
        {
          [`${classPrefix}-outer-micro-bent`]: isMicroBent,
          [`${classPrefix}-outer-segment-left`]: segment === 'left',
          [`${classPrefix}-outer-segment-right`]: segment === 'right',
          [`${classPrefix}-outer-segment-center`]: segment === 'center',
        },
        className
      )}
      style={style}
      onClick={(e: ITouchEvent) => handleClick(e)}
    >
      {close}
      {header}
      <View
        className={classPrefix}
        style={{ display: visible ? 'flex' : 'none' }}
      >
        {renderHeader()}
        <View className={`${classPrefix}-content`}>{children}</View>
        {renderFooter()}
      </View>
    </View>
  )
}

Content.displayName = 'NutContent'
