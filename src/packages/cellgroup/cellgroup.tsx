import React, { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import CellGroupContext from '@/packages/cellgroup/context'

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
  const { children, className, title, description, divider, ...rest } = {
    ...defaultProps,
    ...props,
  }
  return (
    <div className={classNames(classPrefix, className)} {...rest}>
      {title ? <div className={`${classPrefix}-title`}>{title}</div> : null}
      {description ? (
        <div className={`${classPrefix}-description`}>{description}</div>
      ) : null}
      <div
        className={`${classPrefix}-wrap ${
          divider ? `${classPrefix}-wrap-divider` : ''
        }`}
      >
        <CellGroupContext.Provider value={{ divider, group: true }}>
          {React.Children.map(children, (child, index) => {
            return child?.type?.displayName === 'NutCell'
              ? React.cloneElement(child, {
                  isLast: index === React.Children.count(children) - 1,
                })
              : child
          })}
        </CellGroupContext.Provider>
      </div>
    </div>
  )
}

CellGroup.defaultProps = defaultProps
CellGroup.displayName = 'NutCellGroup'
