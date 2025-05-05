import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { DataContext } from './context'
import { ComponentDefaults } from '@/utils/typings'
import { WebStepsProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  direction: 'horizontal',
  layout: 'single',
  type: 'text',
  status: 'default',
  value: 0,
  icon: null,
} as WebStepsProps

export const Steps: FunctionComponent<
  Partial<WebStepsProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const propSteps = { ...defaultProps, ...props }
  const {
    direction,
    value,
    layout,
    status,
    type,
    className,
    children,
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
      [`${classPrefix}-${direction}-count-${React.Children.count(children)}`]:
        true,
      [`${classPrefix}-${direction}-${layout}`]: true,
      [`${classPrefix}-${direction}-${type}`]: true,
      [`${classPrefix}-${direction}-${status}`]: true,
    },
    className
  )
  return (
    <DataContext.Provider value={parentSteps}>
      <div className={classes} {...restProps}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              // @ts-ignore
              className: classNames(child.props.className, {
                'nut-step-last': index === React.Children.count(children) - 1,
              }),
            })
          }
          return child
        })}
      </div>
    </DataContext.Provider>
  )
}

Steps.displayName = 'NutSteps'
