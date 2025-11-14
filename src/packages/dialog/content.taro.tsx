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

  return (
    <View
      className={classNames(`${classPrefix}-outer`, className)}
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
