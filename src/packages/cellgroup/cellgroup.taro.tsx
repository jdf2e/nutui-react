import React, { FunctionComponent, ReactNode } from 'react'

import bem from '@/utils/bem'

export interface CellGroupProps {
  title: ReactNode
  desc: ReactNode
  titleSlot: ReactNode
  descSlot: ReactNode
  classPrefix: string
  children?: ReactNode
}
const defaultProps = {
  title: '',
  desc: '',
  titleSlot: null,
  descSlot: null,
  classPrefix: 'nutui-cell-group',
} as CellGroupProps
export const CellGroup: FunctionComponent<Partial<CellGroupProps>> = (
  props
) => {
  const { children, classPrefix, title, desc, titleSlot, descSlot } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('cell-group')
  return (
    <div className={b(null, [classPrefix])}>
      {titleSlot || (
        <>{title ? <div className={b('title')}>{title}</div> : null}</>
      )}
      {descSlot || (
        <>{title ? <div className={b('desc')}>{desc}</div> : null}</>
      )}

      <div className={b('wrap')}>{children}</div>
    </div>
  )
}

CellGroup.defaultProps = defaultProps
CellGroup.displayName = 'NutCellGroup'
