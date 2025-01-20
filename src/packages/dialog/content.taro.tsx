import React, { FunctionComponent, HTMLAttributes } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { ContentProps } from './types'

export const defaultContentProps: ContentProps = {
  visible: false,
  title: '',
  header: null,
  footer: null,
  close: '',
  footerDirection: '',
  onClick: () => {},
}

export const Content: FunctionComponent<
  Partial<ContentProps> &
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
            [footerDirection as any]: footerDirection,
          })}
        >
          {footer}
        </View>
      )
    )
  }

  const handleClick = (e: any) => {
    onClick && onClick(e)
  }

  return (
    <View
      className={classNames(`${classPrefix}-outer`, props.className)}
      style={props.style}
      onClick={(e) => handleClick(e)}
    >
      {close}
      {header}
      <View
        className={classPrefix}
        style={{ display: visible ? 'flex' : 'none' }}
      >
        {renderHeader()}
        <View className={`${classPrefix}-content`}>
          <>{children}</>
        </View>
        {renderFooter()}
      </View>
    </View>
  )
}

Content.displayName = 'NutContent'
