import React, { FunctionComponent, ReactNode, useContext } from 'react'
import classNames from 'classnames'
import { View, Text } from '@tarojs/components'
import { DataContext } from '@/packages/steps/context'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface StepProps extends BasicComponent {
  title: ReactNode
  description: ReactNode
  value: number
  icon: ReactNode
  lineWidth: 70
}

const defaultProps = {
  ...ComponentDefaults,
  title: '',
  description: '',
  value: 0,
  icon: null,
  lineWidth: 70,
} as StepProps
export const Step: FunctionComponent<
  Partial<StepProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>
> = (props) => {
  const {
    children,
    title,
    description,
    value,
    icon,
    className,
    lineWidth,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }
  const parent: any = useContext(DataContext)

  const dot = parent.propSteps.dot
  const getCurrentStatus = () => {
    const index = value
    if (index < +parent.propSteps.value) return 'finish'
    return index === +parent.propSteps.value ? 'process' : 'wait'
  }
  const handleClickStep = () => {
    parent.propSteps?.onStepClick && parent.propSteps?.onStepClick(value)
  }

  const classPrefix = `nut-step`
  const classes = classNames(
    classPrefix,
    {
      [`${classPrefix}-${getCurrentStatus()}`]: true,
    },
    className
  )

  const renderIconClass = () => {
    if (icon) {
      return `${classPrefix}-icon is-icon`
    }
    if (!dot && !icon) {
      return `${classPrefix}-icon is-text`
    }
    return `${classPrefix}-icon`
  }
  const renderLineStyle = () => {
    const isLastItem =
      parent.propSteps.children[parent.propSteps.children.length - 1].props
        .value === value
    const leftPosition = 100 - lineWidth / 2
    return isLastItem ? { display: 'none' } : { left: `${leftPosition}%` }
  }
  return (
    <View className={classes} {...restProps} onClick={handleClickStep}>
      <View className="nut-step-head">
        <View className={renderIconClass()}>
          {icon || (!dot && <Text className="nut-step-inner">{value}</Text>)}
        </View>
        <View className="nut-step-line" style={renderLineStyle()} />
      </View>
      {(title || description) && (
        <View className="nut-step-main">
          <Text className="nut-step-title">{title}</Text>
          {description && (
            <Text className="nut-step-description">{description}</Text>
          )}
        </View>
      )}
    </View>
  )
}

Step.displayName = 'NutStep'
