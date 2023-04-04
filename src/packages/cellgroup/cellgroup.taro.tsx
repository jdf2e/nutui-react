import React, { FunctionComponent, ReactNode } from 'react'

import bem from '@/utils/bem'

export interface CellGroupProps {
  title: ReactNode
  description: ReactNode
  className: string
  style: React.CSSProperties
  children?: ReactNode
}
const defaultProps = {
  title: '',
  description: '',
  className: '',
  style: {},
} as CellGroupProps
export const CellGroup: FunctionComponent<Partial<CellGroupProps>> = (
  props
) => {
  const { children, className, style, title, description, ...rest } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('cell-group')
  return (
    <div className={b(null, [className])} style={style} {...rest}>
      {title ? <div className={b('title')}>{title}</div> : null}
      {description ? (
        <div className={b('description')}>{description}</div>
      ) : null}
      <div className={b('wrap')}>{children}</div>
    </div>
  )
}

CellGroup.defaultProps = defaultProps
CellGroup.displayName = 'NutCellGroup'
