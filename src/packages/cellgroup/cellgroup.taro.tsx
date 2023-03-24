import React, { FunctionComponent, ReactNode } from 'react'

import bem from '@/utils/bem'

export interface CellGroupProps {
  title: ReactNode
  description: ReactNode
  titleSlot: ReactNode
  descSlot: ReactNode
  className: string
  children?: ReactNode
}
const defaultProps = {
  title: '',
  description: '',
  className: '',
  titleSlot: null,
  descSlot: null,
} as CellGroupProps
export const CellGroup: FunctionComponent<Partial<CellGroupProps>> = (
  props
) => {
  const { children, className, title, description, titleSlot, descSlot } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('cell-group')
  return (
    <div className={b(null, [className])}>
      {titleSlot || (
        <>{title ? <div className={b('title')}>{title}</div> : null}</>
      )}
      {descSlot || (
        <>
          {description ? (
            <div className={b('description')}>{description}</div>
          ) : null}
        </>
      )}

      <div className={b('wrap')}>{children}</div>
    </div>
  )
}

CellGroup.defaultProps = defaultProps
CellGroup.displayName = 'NutCellGroup'
