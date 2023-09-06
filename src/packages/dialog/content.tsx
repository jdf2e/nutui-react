import React, { FunctionComponent, ReactNode, HTMLAttributes } from 'react'
import classNames from 'classnames'

interface ContentProps {
  visible: boolean
  title: ReactNode
  footer: ReactNode
  footerDirection: string
}

export const Content: FunctionComponent<
  Partial<ContentProps> & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { visible, title, footer, footerDirection, onClick, children } = props

  const classPrefix = 'nut-dialog'

  const renderHeader = () => {
    return title ? (
      <div className={`${classPrefix}__header`}>{title}</div>
    ) : null
  }

  const renderFooter = () => {
    return footer ? (
      <div
        className={classNames(`${classPrefix}__footer`, {
          [footerDirection as any]: footerDirection,
        })}
      >
        {footer}
      </div>
    ) : null
  }

  const handleClick = (e: any) => {
    onClick && onClick(e)
  }

  return (
    <div
      className={classNames(`${classPrefix}__outer`, props.className)}
      style={props.style}
      onClick={(e) => handleClick(e)}
    >
      <div
        className={classPrefix}
        style={{ display: visible ? 'flex' : 'none' }}
      >
        {renderHeader()}
        <div className={`${classPrefix}__content`}>
          <>{children}</>
        </div>
        {renderFooter()}
      </div>
    </div>
  )
}

Content.displayName = 'NutContent'
