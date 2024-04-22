import React, { FunctionComponent, ReactNode, HTMLAttributes } from 'react'
import classNames from 'classnames'
import { ITouchEvent, View } from '@tarojs/components'
import { BasicComponent } from '@/utils/typings'

interface ContentProps extends BasicComponent {
  visible: boolean
  title: ReactNode
  header: ReactNode
  footer: ReactNode
  close: ReactNode
  footerDirection: string
  onClick: (event: ITouchEvent) => void
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
    onClick,
    children,
  } = props

  const classPrefix = 'nut-dialog'

  const renderHeader = () => {
    return title ? (
      <View className={`${classPrefix}-header`}>{title}</View>
    ) : null
  }

  const renderFooter = () => {
    return footer ? (
      <View
        className={classNames(`${classPrefix}-footer`, {
          [footerDirection as any]: footerDirection,
        })}
      >
        {footer}
      </View>
    ) : null
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
