import React, { FunctionComponent, ReactNode, HTMLAttributes } from 'react'
import classNames from 'classnames'
import { ITouchEvent } from '@tarojs/components'

interface ContentProps {
  visible: boolean
  title: ReactNode
  footer: ReactNode
  footerDirection: string
  onClick: (event: ITouchEvent) => void
}

export const Content: FunctionComponent<
  Partial<ContentProps> &
    Omit<HTMLAttributes<HTMLDivElement>, 'onClick' | 'title'>
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
    <div className={`${classPrefix}__outer`} onClick={(e) => handleClick(e)}>
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
