import React, { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface CellGroupProps extends BasicComponent {
  title: ReactNode
  description: ReactNode
  children?: ReactNode
  divider: boolean
}
const defaultProps = {
  ...ComponentDefaults,
  title: '',
  description: '',
  divider: true,
} as CellGroupProps

const classPrefix = 'nut-cell-group'

export const CellGroup: FunctionComponent<Partial<CellGroupProps>> = (
  props
) => {
  const { children, className, style, title, description, divider, ...rest } = {
    ...defaultProps,
    ...props,
  }
  return (
    <div className={classNames(classPrefix, className)} {...rest}>
      {title ? <div className={`${classPrefix}__title`}>{title}</div> : null}
      {description ? (
        <div className={`${classPrefix}__description`}>{description}</div>
      ) : null}
      <div
        className={`${classPrefix}__wrap ${
          divider ? `${classPrefix}__wrap--divider` : ''
        }`}
      >
        {children}
      </div>
    </div>
  )
}

CellGroup.defaultProps = defaultProps
CellGroup.displayName = 'NutCellGroup'
