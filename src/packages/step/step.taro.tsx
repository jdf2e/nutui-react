import React, { FunctionComponent, ReactNode, useContext } from 'react'
import classNames from 'classnames'
import { View, Text } from '@tarojs/components'
import { DataContext } from '@/packages/steps/context'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { harmony, rn } from '@/utils/platform-taro'
import pxTransform from '@/utils/px-transform'

export interface StepProps extends BasicComponent {
  title: ReactNode
  description: ReactNode
  value: number
  icon: ReactNode
  lineWidth: number
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

  const { dot, direction } = parent.propSteps

  const getCurrentStatus = () => {
    const index = value
    if (index < +parent.propSteps.value) return 'finish'
    return index === +parent.propSteps.value ? 'process' : 'wait'
  }
  const handleClickStep = () => {
    parent.propSteps?.onStepClick && parent.propSteps?.onStepClick(value)
  }

  const classPrefix = `nut-step`
  const directionClass = direction === 'vertical' ? 'vertical' : ''
  const classes = classNames(
    classPrefix,
    `${classPrefix}-${getCurrentStatus()}`,
    {
      [`${classPrefix}-vertical`]: direction === 'vertical',
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
    return `${classPrefix}-icon ${classPrefix}-dot-icon`
  }
  const renderLineStyle = () => {
    const isLastItem =
      parent.propSteps.children[parent.propSteps.children.length - 1].props
        .value === value
    const leftPosition = 100 - lineWidth / 2
    if (isLastItem) {
      return { display: 'none' }
    }
    if (harmony()) {
      return {
        left: `${leftPosition}%`,
        top: pxTransform(dot ? 3 : 12.5),
      }
    }
    if (rn()) {
      return {
        left: `${leftPosition}%`,
      }
    }
  }
  return (
    <View className={classes} {...restProps} onClick={handleClickStep}>
      <View className={`${classPrefix}-head`}>
        <View
          className={classNames(
            renderIconClass(),
            `${classPrefix}-${getCurrentStatus()}-icon`,
            {
              [`${classPrefix}-dot-${getCurrentStatus()}-icon`]: dot,
            }
          )}
        >
          {icon ||
            (!dot && (
              <Text className={`${classPrefix}-${getCurrentStatus()}-inner`}>
                {value}
              </Text>
            ))}
        </View>
        <View
          className={classNames(
            `${classPrefix}-line`,
            {
              [`${classPrefix}-vertical-line`]: direction === 'vertical',
              [`${classPrefix}-${directionClass}-dot-line`]: dot,
            },
            `${classPrefix}-${getCurrentStatus()}-line`
          )}
          style={renderLineStyle()}
        />
      </View>
      {(title || description) && (
        <View
          className={`${classPrefix}-main ${classPrefix}-${directionClass}-main`}
        >
          <Text
            className={`${classPrefix}-title ${classPrefix}-${getCurrentStatus()}-title`}
          >
            {title}
          </Text>
          {description && (
            <Text
              className={`${classPrefix}-description ${classPrefix}-${getCurrentStatus()}-description`}
            >
              {description}
            </Text>
          )}
        </View>
      )}
    </View>
  )
}

Step.displayName = 'NutStep'
