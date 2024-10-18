import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { DataContext } from './context'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { harmonyAndRn } from '@/utils/platform-taro'

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
      [`${classPrefix}-dot`]: dot,
    },
    className
  )
  const renderContent = () => {
    if (harmonyAndRn()) {
      return (
        <View>
          <DataContext.Provider value={parentSteps}>
            <View className={classes} {...restProps}>
              {children}
            </View>
          </DataContext.Provider>
        </View>
      )
    }
    return (
      <DataContext.Provider value={parentSteps}>
        <View className={classes} {...restProps}>
          {children}
        </View>
      </DataContext.Provider>
    )
  }
  return <>{renderContent()}</>
}

Steps.displayName = 'NutSteps'
