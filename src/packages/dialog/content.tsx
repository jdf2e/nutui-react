import React, { FunctionComponent, HTMLAttributes, MouseEvent } from 'react'
import classNames from 'classnames'
import { WebContentProps } from '@/types'

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
  Partial<WebContentProps> &
    Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'content'>
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
    return title && <div className={`${classPrefix}-header`}>{title}</div>
  }

  const renderFooter = () => {
    return (
      footer && (
        <div
          className={classNames(`${classPrefix}-footer`, {
            [footerDirection]: footerDirection,
          })}
        >
          {footer}
        </div>
      )
    )
  }

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    onClick && onClick(e)
  }

  return (
    <div
      className={classNames(`${classPrefix}-outer`, className)}
      style={style}
      onClick={handleClick}
    >
      {close}
      {header}
      <div
        className={classPrefix}
        style={{ display: visible ? 'flex' : 'none' }}
      >
        {renderHeader()}
        <div className={`${classPrefix}-content`}>{children}</div>
        {renderFooter()}
      </div>
    </div>
  )
}

Content.displayName = 'NutContent'
