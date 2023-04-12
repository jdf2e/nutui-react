import React, { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface CellGroupProps extends BasicComponent {
  title: ReactNode
  description: ReactNode
  children?: ReactNode
}
const defaultProps = {
  ...ComponentDefaults,
  title: '',
  description: '',
} as CellGroupProps

const classPrefix = 'cell-group'

export const CellGroup: FunctionComponent<Partial<CellGroupProps>> = (
  props
) => {
  const { children, className, style, title, description, ...rest } = {
    ...defaultProps,
    ...props,
  }
  return (
    <div className={classNames(classPrefix, className)} {...rest}>
      {title ? <div className={`${classPrefix}__title`}>{title}</div> : null}
      {description ? (
        <div className={`${classPrefix}__description`}>{description}</div>
      ) : null}
      <div className={`${classPrefix}__wrap`}>{children}</div>
    </div>
  )
}

CellGroup.defaultProps = defaultProps
CellGroup.displayName = 'NutCellGroup'
