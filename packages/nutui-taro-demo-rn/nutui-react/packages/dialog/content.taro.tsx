import React, { FunctionComponent, ReactNode, HTMLAttributes } from 'react'
import classNames from 'classnames'
import { ITouchEvent } from '@tarojs/components'
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
    return title ? <div className={`${classPrefix}-header`}>{title}</div> : null
  }

  const renderFooter = () => {
    return footer ? (
      <div
        className={classNames(`${classPrefix}-footer`, {
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
      className={classNames(`${classPrefix}-outer`, props.className)}
      style={props.style}
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
