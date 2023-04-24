import React, { FunctionComponent, ReactNode, HTMLAttributes } from 'react'
import classNames from 'classnames'

interface ContentProps {
  visible: boolean
  title: ReactNode
  footer: ReactNode
  footerDirection: string
  onClick: (e: MouseEvent) => void
}

export const Content: FunctionComponent<
  Partial<ContentProps> & Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>
> = (props) => {
  const { visible, title, footer, footerDirection, onClick, children } = props

  let headerNode: ReactNode
  if (title) {
    headerNode = <div className="nut-dialog__header">{title}</div>
  }

  let footerNode: ReactNode
  if (footer) {
    footerNode = (
      <div
        className={classNames('nut-dialog__footer', {
          [footerDirection as any]: footerDirection,
        })}
      >
        {footer}
      </div>
    )
  }

  const handleClick = (e: any) => {
    onClick && onClick(e)
  }

  return (
    <div className="nut-dialog__outer" onClick={(e) => handleClick(e)}>
      <div
        className="nut-dialog"
        style={{ display: visible ? 'flex' : 'none' }}
      >
        {headerNode}
        <div className="nut-dialog__content">
          <div>{children}</div>
        </div>
        {footerNode}
      </div>
    </div>
  )
}

Content.displayName = 'NutContent'
