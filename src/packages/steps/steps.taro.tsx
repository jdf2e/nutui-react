import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { DataContext } from './context'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface StepsProps extends BasicComponent {
  value: number
  direction: string
  dot: boolean
  onStepClick: (index: number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  value: 0,
  direction: 'horizontal',
  dot: false,
} as StepsProps

export const Steps: FunctionComponent<
  Partial<StepsProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const propSteps = { ...defaultProps, ...props }
  const {
    children,
    value,
    direction,
    className,
    dot,
    onStepClick,
    ...restProps
  } = propSteps

  const parentSteps = {
    propSteps,
  }

  const classPrefix = `nut-steps`
  const classes = classNames(
    classPrefix,
    {
      [`${classPrefix}-${direction}`]: true,
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

Steps.displayName = 'NutSteps'
