import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { DataContext } from './context'
import { ComponentDefaults } from '@/utils/typings'
import { TaroStepsProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  value: 0,
  direction: 'horizontal',
  dot: false,
} as TaroStepsProps

export const Steps: FunctionComponent<
  Partial<TaroStepsProps> & React.HTMLAttributes<HTMLDivElement>
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
