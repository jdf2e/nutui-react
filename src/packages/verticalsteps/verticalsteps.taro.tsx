import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { DataContext } from '../step/context'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface VerticalStepsProps extends BasicComponent {
  value: number
  dot: boolean
  onStepClick: (index: number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  value: 0,
  dot: false,
} as VerticalStepsProps

export const VerticalSteps: FunctionComponent<
  Partial<VerticalStepsProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const propSteps = { ...defaultProps, ...props }
  const { children, value, className, dot, onStepClick, ...restProps } =
    propSteps

  const parentSteps = {
    propSteps,
  }

  const classPrefix = `nut-steps`
  const classes = classNames(
    classPrefix,
    {
      [`${classPrefix}-vertical`]: true,
      [`${classPrefix}-vertical-dot`]: !!dot,
      [`${classPrefix}-dot`]: !!dot,
    },
    className
  )
  return (
    <DataContext.Provider value={parentSteps}>
      <div className={classes} {...restProps}>
        {children}
      </div>
    </DataContext.Provider>
  )
}

VerticalSteps.displayName = 'NutVerticalSteps'
