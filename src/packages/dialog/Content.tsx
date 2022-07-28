import React, { FunctionComponent, ReactNode, HTMLAttributes } from 'react'
import classNames from 'classnames'

interface ContentProps {
  visible?: boolean
  title?: ReactNode
  footer?: ReactNode
  textAlign?: string
  footerDirection?: string
  onClickSelf?: () => void
}

export const Content: FunctionComponent<
  Partial<ContentProps> & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    visible,
    title,
    footer,
    textAlign,
    footerDirection,
    onClickSelf,
    children,
  } = props

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

  const handleClick = () => {
    onClickSelf && onClickSelf()
  }

  return (
    <div className="nut-dialog__outer" onClick={handleClick}>
      <div
        className="nut-dialog"
        style={{ display: visible ? 'flex' : 'none' }}
      >
        {headerNode}
        <div
          className="nut-dialog__content"
          style={{ textAlign } as React.CSSProperties}
        >
          <div>{children}</div>
        </div>
        {footerNode}
      </div>
    </div>
  )
}

Content.displayName = 'NutContent'
