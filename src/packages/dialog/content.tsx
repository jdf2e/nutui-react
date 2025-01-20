import React, { FunctionComponent, HTMLAttributes } from 'react'
import classNames from 'classnames'
import { ContentProps } from './types'

export const defaultContentProps: ContentProps = {
  visible: false,
  title: '',
  header: '',
  footer: '',
  close: '',
  footerDirection: '',
  onClick: () => {},
}

export const Content: FunctionComponent<
  Partial<ContentProps> &
    Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'content'>
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
    style,
    className,
  } = { ...defaultContentProps, ...props }

  const classPrefix = 'nut-dialog'

  const renderHeader = () => {
    return title ? <div className={`${classPrefix}-header`}>{title}</div> : null
  }

  const renderFooter = () => {
    return (
      footer && (
        <div
          className={classNames(`${classPrefix}-footer`, {
            [footerDirection as any]: footerDirection,
          })}
        >
          {footer}
        </div>
      )
    )
  }

  const handleClick = (e: any) => {
    onClick && onClick(e)
  }

  return (
    <div
      className={classNames(`${classPrefix}-outer`, className)}
      style={style}
      onClick={(e) => handleClick(e)}
    >
      {close}
      {header}
      <div
        className={classPrefix}
        style={{ display: visible ? 'flex' : 'none' }}
      >
        {renderHeader()}
        <div className={`${classPrefix}-content`}>
          <>{children}</>
        </div>
        {renderFooter()}
      </div>
    </div>
  )
}

Content.displayName = 'NutContent'
